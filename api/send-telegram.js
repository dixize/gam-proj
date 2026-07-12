// Vercel Serverless Function: /api/send-telegram
//
// ВАЖНО: файл обязательно должен лежать по пути api/send-telegram.js.
//
// Переменные окружения (Vercel → Project → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN — токен бота от @BotFather
//   TELEGRAM_CHAT_ID   — id чата/канала администратора
//
// ДИАГНОСТИКА: открой в браузере /api/send-telegram (обычный GET-переход по ссылке) —
// функция ответит JSON-ом, настроены ли переменные окружения, без раскрытия их значений.
// Если видишь telegramConfigured: false — значит переменные не долетели до функции
// (проверь: сохранены именно в Production/тот env, куда задеплоено; после добавления
// переменных нужен redeploy — они не подхватываются "на лету" в уже собранный деплой).

export default async function handler(req, res) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (req.method === 'GET') {
    return res.status(200).json({
      ok: true,
      telegramConfigured: Boolean(botToken && chatId)
    });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const { category, date, dateLabel, duration, price, dayType, name, contact, comment } = body;

  if (!category || !date || !duration || !name || !contact) {
    return res.status(400).json({ error: 'Не хватает обязательных полей' });
  }

  if (!botToken || !chatId) {
    console.error('TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID не заданы в Environment Variables.');
    return res.status(500).json({
      error: 'Telegram не настроен на сервере. Проверь переменные окружения в Vercel и сделай Redeploy после их добавления.'
    });
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

    const tgData = await tgRes.json().catch(() => null);

    if (!tgRes.ok) {
      console.error('Telegram API error:', tgData);
      return res.status(502).json({
        error: `Telegram отклонил запрос: ${tgData?.description || 'неизвестная ошибка'}`
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Telegram fetch failed:', err);
    return res.status(502).json({ error: 'Ошибка соединения с Telegram API' });
  }
}

function escapeMd(str) {
  return String(str).replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1');
}
