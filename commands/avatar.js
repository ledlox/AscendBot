const { EmbedBuilder } = require('discord.js');
const config = require('../config.json');

module.exports = {
  name: 'avatar',
  aliases: ['pfp'],
  description: 'Get a user avatar',
  async execute(message, args) {
    const target = message.mentions.users.first() ||
      message.guild.members.cache.get(args[0])?.user ||
      message.author;

    const embed = new EmbedBuilder()
      .setTitle(`${target.tag}'s Avatar`)
      .setImage(target.displayAvatarURL({ size: 512, extension: 'png' }))
      .setColor(0xaa44ff)
      .setFooter({ text: `Requested by ${message.author.tag}` })
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  },
};
