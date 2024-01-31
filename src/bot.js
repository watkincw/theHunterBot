import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as HelloWorld from './commands/helloworld.js';

config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

function readyDiscord() {
    console.log(client.user.tag + ' logged in and ready!');
}

async function handleInteraction(interaction) {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === 'helloworld') {
        await HelloWorld.execute(interaction);
    }
}

client.once(Events.ClientReady, readyDiscord);
client.login(process.env.TOKEN);
client.on(Events.InteractionCreate, handleInteraction);