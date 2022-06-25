import path from "path";
import { BotClient } from "@guildedjs/gil";
const { token } = require('./config.json');

const client = new BotClient({
  token: token,
  prefix: "!",
});

client.once('ready', () => console.log('Ready! Shut down using "ctrl+c"'));

client.login();

process.on("unhandledRejection", console.log)