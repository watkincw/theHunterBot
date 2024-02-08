import { SlashCommandBuilder } from "discord.js";
const { theHunterData } = require("../../theHunterData.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("moose_ammo_class")
    .setDescription("Shows the ammo class for Moose"),
  async execute(interaction) {
    await interaction.reply(
      `Moose Ammo Class: ${theHunterData.Animals.Moose.AmmoClass}`
    );
  },
};
