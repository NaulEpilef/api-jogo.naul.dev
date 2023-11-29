import tmi, { Options } from "tmi.js";

const BOT_NICK = process.env.BOT_NICK;
const CHANNEL = [process.env.CHANNEL];
const TOKEN = process.env.TOKEN;

const opts = {
  identity: {
    username: BOT_NICK,
    password: TOKEN,
  },
  channels: CHANNEL,
} as Options;

const client = new tmi.client(opts);

export default client;