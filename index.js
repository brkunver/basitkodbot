const TelegramBot = require("node-telegram-bot-api")
require("dotenv").config()

const token = process.env.token

const bot = new TelegramBot(token, { polling: true })

bot.on("message", (msg) => {
  const id = msg.chat.id
  if (id == process.env.grup_id) {
    if (msg.text == "saat kaç") {
      let saat = new Date().getHours()
      bot.sendMessage(id, `saat şuan : ${saat}`)
    }
  }
})
