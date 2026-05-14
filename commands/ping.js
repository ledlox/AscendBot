module.exports = {
  name: 'ping',
  description: 'Check bot latency',
  async execute(message) {
    const sent = await message.channel.send('Pinging...');
    const latency = sent.createdTimestamp - message.createdTimestamp;
    sent.edit(`Pong! 🏓\n**Latency:** ${latency}ms\n**API Latency:** ${Math.round(message.client.ws.ping)}ms`);
  },
};
