import { PrismaClient, Users } from "@prisma/client";

interface Request {
  username: string;
}

const verifyNewUser = async ({ username }: Request): Promise<Users> => {
  const prisma = new PrismaClient();

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