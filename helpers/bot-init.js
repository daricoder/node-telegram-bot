const TOKEN_BOT = process.env.TOKEN_BOT;
const CHAT_ID = parseInt(process.env.CHAT_ID);

const { Telegraf } = require("telegraf");
const BOT = new Telegraf(TOKEN_BOT);

module.exports = {
    CHAT_ID,
    BOT
}