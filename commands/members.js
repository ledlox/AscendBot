module.exports = {
  name: 'members',
  description: 'Show member count',
  async execute(message) {
    const { guild } = message;
    const total = guild.memberCount;
    const humans = guild.members.cache.filter(m => !m.user.bot).size;
    const bots = total - humans;

    message.channel.send(
      `📊 **${guild.name}**\n` +
      `Total: **${total}**\n` +
      `Humans: **${humans}**\n` +
      `Bots: **${bots}**`
    );
  },
};
