import fs from "fs";
import path from "path";
// import middlewares from "../middlewares";
import bot from "./client";

// import { option } from "tmi.js"

export default async (
  target: string,
  context: any,
  message: string,
  isBot: boolean
) => {
  if (isBot) return;

//   const player = await middlewares.verifyNewUser({
//     username: context.username,
//   });
//   middlewares.verifyBirthday({ player, target, username: context.username });

  const viewerMessage = message.trim();

  if (viewerMessage.match(/^\!/)) {
    const command = viewerMessage.split(" ")[0].split("!")[1];

    fs.stat(
      path.join(__dirname, "..", "commands", `${command}.ts`),
      function (err, stat) {
        if (err == null) {
          const { exec } = require(`../commands/${command}.ts`);
          exec({ target, context, message, isBot, viewerMessage });
        } else if (err.code === "ENOENT") {
					bot.say(
            target,
            `@${context.username} ta MALUCO? Esse bagulho nem existe, DOIDÃO!`
          );
        } else {
          console.log("Some other error: ", err.code);
        }
      }
    );
  }
};