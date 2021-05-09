const config = require("../config.json")
const log = message => {
  
    console.log(`${message}`)
}

module.exports = async client => {
  
client.user.setActivity(`AZEXA ❤️ LOVELY`, {
type: "PLAYING",
url: "https://www.twitch.tv/klanter"})
    log(`[BOT] Aktif, Komutlar Yüklendi.`)
  }
