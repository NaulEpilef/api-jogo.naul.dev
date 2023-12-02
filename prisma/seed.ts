import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

async function main() {
	const newUsersList = [
		"Gabriel Tolendo",
		"Jonas Irmãos",
		"Senhor Ótimo",
		"Mulher Borrachuda",
		"Sr Senhor",
		"El Molho Del Ocho",
		"Silvio Silva",
		"Fausto Santos",
		"Garoto Malucão",
		"Benício Tenyson",
		"Da Vinte Um",
		"Frederico Mercurio",
		"Marcos João Filho",
		"Madeira Madeirada",
		"Senhor Cabeça De Cenoura",
		"Batera Coderosa",
		"Dario Irmãos",
		"Ouriço Do Som",
		"Doutor Homem Ovo",
		"Bora Aventureira",
		"Deyde Costa",
	].map(s => ({ id: randomUUID(), username: s }));
	await prisma.users.createMany({
		data: newUsersList
	});

	console.log(newUsersList);
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });