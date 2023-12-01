import { Users } from "@prisma/client";
import prisma from "../../config/db";

interface Request {
  username: string;
}

const verifyNewUser = async ({ username }: Request): Promise<Users> => {
  let user = (await prisma.users.findFirst({
    where: { username },
  })) as Users;

  if (!user) {
    user = (await prisma.users.create({
      data: { username },
    })) as Users;
  }

  prisma.$disconnect();

  return user;
};

export default verifyNewUser;