import { Client } from "discord.js";
import { onMessage } from "./events/on-message";
import { onReady } from "./events/on-ready";
import { onError } from "./events/on-error";

const client = new Client();

client.on("message", message => onMessage(message, client));
client.on("ready", () => onReady());
client.on("error", error => onError(error))

client.login(process.env.DISCORD_TOKEN);