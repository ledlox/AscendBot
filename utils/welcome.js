async function generateWelcomeUrl(member) {
  const username = encodeURIComponent(member.user.username);
  const avatar = member.user.displayAvatarURL({ extension: 'png', size: 256 });
  const title = encodeURIComponent('Welcome to AscendGems!');
  const text = encodeURIComponent(`Member #${member.guild.memberCount}`);

  return `https://api.discorddevtools.xyz/welcome-image-generator/generate.png?title=${title}&titleColor=aa44ff&username=${username}&usernameColor=ffffff&text=${text}&textColor=33ffff&image=${avatar}&borderColor=aa44ff&allCaps=false&cacheImage=true`;
}

module.exports = { generateWelcomeUrl };
