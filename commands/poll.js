module.exports = {
  name: 'poll',
  description: 'Create a poll',
  async execute(message, args) {
    if (!args.length) return message.reply('Usage: `ab!poll <question>`');

    await message.delete().catch(() => {});
    const sent = await message.channel.send(`📊 **${args.join(' ')}**`);
    await sent.react('✅');
    await sent.react('❌');
  },
};
