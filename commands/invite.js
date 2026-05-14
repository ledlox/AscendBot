module.exports = {
  name: 'invite',
  description: 'Get the bot invite link',
  async execute(message) {
    const link = `https://discord.com/api/oauth2/authorize?client_id=${message.client.user.id}&permissions=8&scope=bot`;
    message.channel.send(`🔗 Invite me to your server: ${link}`);
  },
};
