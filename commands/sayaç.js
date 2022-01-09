const Discord = require('discord.js');
const fs = require('fs')
const profil = JSON.parse(fs.readFileSync("./sayaç.json", "utf8"));
exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("❌ Bu Komutu Kullanabilmek İçin `Sunucuyu Yönet` Yetkisine Sahip Olmalısın!")
  let mkanal = message.mentions.channels.first()
  let sayı = args[1]
  if(!mkanal) return message.reply("❌ Bir Kanal Etiketlemelisin!")
  if(!sayı) return message.reply("❌ Bir Sayı Girmelisin!")
  if(sayı < message.guild.members.size) return message.reply("❌ Sayaç Sayısı Sunucudaki Üye Sayısından Fazla Olmalıdır!\n**Üye Sayısı:** " + message.guild.members.size)
  if(sayı && mkanal) {
    if(!profil[message.guild.id]) {
      profil[message.guild.id] = {
        sayi: sayı,
        kanal: mkanal 
      }
    }
    if(profil[message.guild.id]) {
      profil[message.guild.id].sayi = sayı;
      profil[message.guild.id].kanal = mkanal.id;
    }
    fs.writeFile("./sayaç.json", JSON.stringify(profil), (err) => {
        if(err) message.channel.send("Hata: " + err)
    })
    let embed = new Discord.MessageEmbed()
      .setTitle("✅ Sayaç Ayarlandı ✅")
      .setDescription(`🔸 **Sayaç Kanalı:** ${mkanal}\n🔸 **Sayaç:** \`${sayı}\``)
      .setFooter("Evolve 💖", message.author.avatarURL)
      .setColor("RANDOM")
      .setTimestamp()
    message.channel.send(embed)
  }
};

exports.conf = {
  aliases: []
};
exports.help = {
  name: 'sayaç'
};