const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('2.panel Ping Değerim: **' + client.ping + '** ms');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
