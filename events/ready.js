const config = require("../config.json")
const log = message => {
  
    console.log(`${message}`)
}

module.exports = async client => {
  
client.user.setActivity(`Azexa Was Here..!`, {
type: "PLAYING",
url: "https://www.twitch.tv/klanter"})
    log(`[BOT] Aktif, Komutlar Yüklendi.`)
  }
