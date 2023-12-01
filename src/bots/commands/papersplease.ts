import moment from "moment";
import client from "../twitchBot/client";

import prisma from "../../config/db";

import { Users } from "@prisma/client";

interface execRequest {
  target: string;
  context: any;
  message: string;
  isBot: boolean;
  viewerMessage: string;
}

const exec = async ({
  target,
  context,
  message,
  isBot,
  viewerMessage,
}: execRequest) => {
  const userFound = (await prisma.users.findFirst({
    where: { username: context.username },
  })) as Users;

	if (!userFound) {
		const newUser = (await prisma.users.create({
			data: { username: context.username },
		})) as Users;

		client.say(
			target,
			`Hey! @${context.username} acabou de ser cadastrado no [JOGO]!`
		);

		return;
	}

	client.say(
		target,
		`@${context.username} você já está cadastrado no jogo!`
	);
};

export { exec };