import { SlashCommandBuilder } from "discord.js";
const { theHunterData } = require("../../theHunterData.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("moose_max")
    .setDescription("Shows the max difficulty a Moose can be."),
  async execute(interaction) {
    await interaction.reply(
      `Moose difficulty range: 1 - ${theHunterData.Animals.Moose.MaxDifficulty}`
    );
  },
};
