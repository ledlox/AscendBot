const { EmbedBuilder } = require('discord.js');
const config = require('../config');

module.exports = {
  name: 'help',
  description: 'Shows all available commands',
  async execute(message) {
    const embed = new EmbedBuilder()
      .setTitle('AscendBot Commands')
      .setDescription(`Prefix: \`${config.prefix}\``)
      .setColor(0xaa44ff)
      .addFields(
        {
          name: 'General',
          value: [
            `\`${config.prefix}help\` - Show this message`,
            `\`${config.prefix}ping\` - Bot latency`,
            `\`${config.prefix}botinfo\` - Bot information`,
            `\`${config.prefix}invite\` - Bot invite link`,
          ].join('\n'),
        },
        {
          name: 'Info',
          value: [
            `\`${config.prefix}avatar [user]\` - Get user avatar`,
            `\`${config.prefix}userinfo [user]\` - User information`,
            `\`${config.prefix}serverinfo\` - Server information`,
            `\`${config.prefix}members\` - Member count`,
          ].join('\n'),
        },
        {
          name: 'Fun',
          value: [
            `\`${config.prefix}say <message>\` - Make the bot say something`,
            `\`${config.prefix}poll <question>\` - Create a poll`,
            `\`${config.prefix}coinflip\` - Flip a coin`,
          ].join('\n'),
        },
      )
      .setFooter({ text: 'AscendBot' })
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  },
};
