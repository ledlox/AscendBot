try { require('dotenv').config(); } catch {}

const config = {
  token: process.env.TOKEN,
  prefix: process.env.PREFIX || 'ab!',
  welcomeChannel: process.env.WELCOME_CHANNEL || 'welcome',
  autoRole: process.env.AUTO_ROLE || 'Member',
};

module.exports = config;
