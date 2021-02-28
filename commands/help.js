const Discord = require('discord.js');
const config = require("../config.json")
exports.run = function(client, message) {
 
 const help = new Discord.MessageEmbed()
  .setAuthor(`${message.client.user.username}`, message.client.user.avatarURL)
  .setColor('RANDOM')
  .addField('Music Bot | Müzik Komutları',`

  **+play <müzikismi>**: İstenilen şarkıyı çalar.
  **+pause**: Şarkıyı durdurur.
  **+resume**: Durdurulan şarkıyı devam ettirir.
  **+loop**: Şarkıyı tekrardan oynatır.
  **+skip**: Varsa listedeki diğer şarkılara geçer.
  **+stop**: Şarkıyı durdurur. 
  **+np**: Çalan şarkıyı gösterir.
  **+list**: Şarkıları gösterir.
  **+mix**: Şarkıları karıştırır.
  **+ping**: Botun gecikme süresini gösterir.
  **Sunucunuza eklemek isterseniz:**[davet linki](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)
       `)
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
  .setThumbnail("https://i.pinimg.com/originals/05/4a/a3/054aa3421c22e0c9e04ada3082066a8d.gif")
  .setImage("https://store.donanimhaber.com/82/a4/07/82a407694655485defae55c3367fa31e.gif") 
   return message.channel.send(help).catch(console.error);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','yardim'],
 permLevel: 0
};
 
exports.help = {
 name: 'help',
 description: 'botun gecikme süresini gösterir',
 usage: 'prefix+ping'
};