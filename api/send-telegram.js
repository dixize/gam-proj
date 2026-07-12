// Vercel Serverless Function: /api/send-telegram
// Принимает заявку на бронь с сайта и отправляет уведомление в Telegram.
//
// ВАЖНО: этот файл обязательно должен лежать по пути api/send-telegram.js
// (папка "api" в корне репозитория) — так Vercel понимает, что это серверная функция,
// а не обычный статический файл.
//
// Переменные окружения (Vercel → Project → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN — токен бота от @BotFather
//   TELEGRAM_CHAT_ID   — id чата/канала администратора

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  const { category, date, dateLabel, duration, price, dayType, name, contact, comment } = body;

  if (!category || !date || !duration || !name || !contact) {
    return res.status(400).json({ error: 'Не хватает обязательных полей' });
  }

  const text =
    `🎮 *Новая бронь GAMERS*\n\n` +
    `Категория: *${escapeMd(category)}*\n` +
    `Дата и время: ${escapeMd(dateLabel || date)}\n` +
    `Длительность: ${escapeMd(duration)}\n` +
    `Тариф: ${dayType === 'weekend' ? 'выходной' : 'будни'}${price ? `, ${price} ₽` : ''}\n\n` +
    `Имя: ${escapeMd(name)}\n` +
    `Контакт: ${escapeMd(contact)}\n` +
    (comment ? `Комментарий: ${escapeMd(comment)}\n` : '');

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn('TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID не заданы в Environment Variables.');
    return res.status(500).json({ error: 'Telegram не настроен на сервере' });
  }

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'MarkdownV2'
      })
    });

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      console.error('Telegram error:', errText);
      return res.status(502).json({ error: 'Не удалось отправить уведомление администратору' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Telegram fetch failed:', err);
    return res.status(502).json({ error: 'Ошибка соединения с Telegram' });
  }
}

function escapeMd(str) {
  return String(str).replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1');
}
