module.exports = {
  name: 'say',
  description: 'Make the bot repeat your message',
  async execute(message, args) {
    if (!args.length) return message.reply('Usage: `ab!say <message>`');
    await message.delete().catch(() => {});
    message.channel.send(args.join(' '));
  },
};
