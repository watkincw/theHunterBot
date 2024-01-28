import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('helloworld')
    .setDescription('Hello World!');

export async function execute(interaction) {
    await interaction.reply('Hello World!');
}
