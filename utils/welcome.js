async function generateWelcomeUrl(member) {
  const username = encodeURIComponent(member.user.username);
  const guildName = encodeURIComponent(member.guild.name);
  const avatar = member.user.displayAvatarURL({ extension: 'png', size: 256 });

  return `https://api.some-random-api.com/welcome/img/2/4?type=join&avatar=${avatar}&username=${username}&textcolor=purple&guildName=${guildName}&memberCount=${member.guild.memberCount}`;
}

module.exports = { generateWelcomeUrl };
