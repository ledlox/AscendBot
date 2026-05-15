const config = require('../config');
const { generateWelcomeUrl } = require('../utils/welcome');

module.exports = {
  name: 'guildMemberAdd',
  async execute(member) {
    const channel = config.welcomeChannelId
      ? member.guild.channels.cache.get(config.welcomeChannelId)
      : null;
    if (!channel) return;

    try {
      const url = await generateWelcomeUrl(member);
      const response = await fetch(url);
      const buffer = Buffer.from(await response.arrayBuffer());

      await channel.send({
        content: `Welcome to the server, ${member}!`,
        files: [{ attachment: buffer, name: 'welcome.png' }],
      });
    } catch (err) {
      console.error('Welcome image failed:', err.message);
      await channel.send(`Welcome to the server, ${member}!`);
    }

    if (config.autoRoleId) {
      const role = member.guild.roles.cache.get(config.autoRoleId);
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
