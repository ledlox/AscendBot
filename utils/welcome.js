const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');

async function generateWelcome(member) {
  const width = 800;
  const height = 350;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#0a0a1a');
  gradient.addColorStop(0.5, '#1a0a2a');
  gradient.addColorStop(1, '#0a0a1a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = 'rgba(170, 68, 255, 0.3)';
  ctx.lineWidth = 2;
  ctx.strokeRect(10, 10, width - 20, height - 20);

  const accentGrad = ctx.createLinearGradient(0, 0, width, 0);
  accentGrad.addColorStop(0, '#aa44ff');
  accentGrad.addColorStop(1, '#33ffff');
  ctx.fillStyle = accentGrad;
  ctx.fillRect(0, height - 4, width, 4);

  const avatarUrl = member.user.displayAvatarURL({ extension: 'png', size: 256 });
  const avatar = await loadImage(avatarUrl);

  const avatarSize = 120;
  const avatarX = (width - avatarSize) / 2;
  const avatarY = 50;

  ctx.save();
  ctx.beginPath();
  ctx.arc(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2 + 4, 0, Math.PI * 2);
  ctx.fillStyle = '#aa44ff';
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
  ctx.clip();
  ctx.drawImage(avatar, avatarX, avatarY, avatarSize, avatarSize);
  ctx.restore();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 32px Arial';
  ctx.fillText('Welcome to AscendGems!', width / 2, 230);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '20px Arial';
  ctx.fillText(member.user.tag, width / 2, 268);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.font = '16px Arial';
  ctx.fillText(`Member #${member.guild.memberCount}`, width / 2, 305);

  return canvas.toBuffer();
}

module.exports = { generateWelcome };
