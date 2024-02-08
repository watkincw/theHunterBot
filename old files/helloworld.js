import { SlashCommandBuilder } from "discord.js";
import * as theHunterData from "../src/theHunterData.json" assert { type: "json" };
const AnimalData = theHunterData.default.Animals;

export const data = new SlashCommandBuilder()
  .setName("helloworld")
  .setDescription("Hello World!");

export async function execute(interaction) {
  await interaction.reply({
    content: JSON.stringify(AnimalData.Moose.Weight.kg.max),
    ephemeral: true,
  });
}
