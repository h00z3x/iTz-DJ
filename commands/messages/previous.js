const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
  name: "Previous",
  aliases: ["back", "b"],
  description: "Plays previous song",
  memberVoice: true,
  botVoice: true,
  sameVoice: true,
  queueNeeded: true,

  async execute(client, message, args, cmd, memberVC, botVC, queue) {

    await queue.previous();

    const skippedEmbed = new Discord.EmbedBuilder()
      .setColor(config.mainColor)
      .setDescription("Skipping to the previus track...");

    return message.reply({ embeds: [skippedEmbed] });

  },

};