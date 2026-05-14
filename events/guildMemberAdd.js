const config = require('../config');

module.exports = {
  name: 'guildMemberAdd',
  async execute(member) {
    const channel = member.guild.channels.cache.find(
      c => c.name === config.welcomeChannel
    );
    if (!channel) return;

    try {
      const { generateWelcome } = require('../utils/welcome');
      const buffer = await generateWelcome(member);
      await channel.send({
        content: `Welcome to the server, ${member}!`,
        files: [{ attachment: buffer, name: 'welcome.png' }],
      });
    } catch (err) {
      console.error('Welcome image failed:', err.message);
      await channel.send(`Welcome to the server, ${member}!`);
    }

    if (config.autoRole) {
      const role = member.guild.roles.cache.find(r => r.name === config.autoRole);
      if (role) {
        try {
          await member.roles.add(role);
        } catch (err) {
          console.error('Auto-role failed:', err.message);
        }
      }
    }
  },
};
