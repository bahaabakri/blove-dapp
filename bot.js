const { Telegraf } = require('telegraf');
const bot = new Telegraf('7505265606:AAHw6PHnNAb2kX9kPLJYvgaypsROWuf-f6c'); // Replace with your bot token from BotFather

bot.start((ctx) => {
    ctx.reply('Welcome! Click the button below to open the Web App.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Open Web App', web_app: { url: 'https://blove-dapp.vercel.app' } }] // Replace with your web app URL
            ]
        }
    });
});

bot.launch();