try { require('dotenv').config(); } catch {}

const config = {
  token: process.env.TOKEN,
  prefix: process.env.PREFIX || 'ab!',
  welcomeChannelId: process.env.WELCOME_CHANNEL_ID,
  autoRoleId: process.env.AUTO_ROLE_ID,
};

module.exports = config;
