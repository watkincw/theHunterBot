import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import * as HelloWorld from "./helloworld.js";
import { deployCommands } from "../deploy-commands.js";

config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

function readyDiscord() {
  console.log(client.user.tag + " logged in and ready!");
}

async function handleInteraction(interaction) {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === "helloworld") {
    await HelloWorld.execute(interaction);
  }
}

deployCommands();
setTimeout(() => {
  client.once(Events.ClientReady, readyDiscord);
  client.login(process.env.TOKEN);
  client.on(Events.InteractionCreate, handleInteraction);
}, 2000);
