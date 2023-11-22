// basitkod.com için yazılmış telegram botu

const TelegramBot = require("node-telegram-bot-api") // bot kütüphanesi
require("dotenv").config() // ortam değişkenlerini çağırdım

const token = process.env.token // token değişkenimi aldım koda

const bot = new TelegramBot(token, { polling: true }) // yeni bir bot oluşturdum

// bot bir mesaj aldığında
bot.on("message", (msg) => {
  
  // gelen mesajı gönderen grubun id'si
  const id = msg.chat.id

  // eğer benim grupla aynıysa
  if (id == process.env.grup_id) {
    
    // ve mesaj 'saat kaç' diyorsa
    if (msg.text == "saat kaç") {
     
      // şuanki saati al
      let saat = new Date().getHours()
      
      // ve o gruba gönder
      bot.sendMessage(id, `saat şuan : ${saat}`)
    }
  }
})
