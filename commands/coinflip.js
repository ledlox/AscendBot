module.exports = {
  name: 'coinflip',
  aliases: ['coin', 'flip'],
  description: 'Flip a coin',
  async execute(message) {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    message.channel.send(`🪙 **${result}!**`);
  },
};
