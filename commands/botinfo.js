const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'botinfo',
  description: 'Show bot information',
  async execute(message) {
    const { client } = message;
    const uptime = Math.floor(client.uptime / 1000);
    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);

    const embed = new EmbedBuilder()
      .setTitle('AscendBot')
      .setDescription('Public Discord bot for the AscendGems server.')
      .setColor(0xaa44ff)
      .addFields(
        { name: 'Creator', value: 'ledlox', inline: true },
        { name: 'Uptime', value: `${days}d ${hours}h ${minutes}m`, inline: true },
        { name: 'Servers', value: client.guilds.cache.size.toString(), inline: true },
        { name: 'Users', value: client.users.cache.size.toString(), inline: true },
      )
      .setFooter({ text: 'Built for AscendGems' })
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  },
};
