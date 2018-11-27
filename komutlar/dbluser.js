const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('Bu Komudun Yanına İstediğiniz kullanıcının ID Sini yazınız.');
  
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + `Discord Bot List Bot ID İle kullanıcı arama arama`)
    .setColor("#18BF7E")
    .setDescription(`https://discordbots.org/user/${mesaj}   Bu Komudun Yanına İstediğiniz kullanıcının ID Sini yazınız. Eğer Linkte kullanıcı Çıkmadı ise dbl ye kayıt olmamıştır !.`)
    .setThumbnail('')
    return message.channel.sendEmbed(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dbl'],
  permLevel: 2
};

exports.help = {
  name: 'dbluser',
  description: 'dbluser',
  usage: 'dbluser'
};
