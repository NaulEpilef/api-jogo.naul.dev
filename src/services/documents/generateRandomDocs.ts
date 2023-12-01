import moment, { Moment } from "moment";

import { IDocuments } from "../../interfaces/documents.interfaces";

import randomNumberInRange from "../general/randomInRange";
import { generateCodeById } from "../general/generateCode";
import falsifyDocs from "./falsifyDocs";
import prisma from "../../config/db";

const generateRandomDocs = async () => {
	const users = await prisma.users.findMany();
	prisma.$disconnect();

	const isFalsified: boolean = randomNumberInRange(1, 100) <= 30;
	
	const randomUser = users[randomNumberInRange(0, users.length-1)];

  const randomName: string = randomUser.username.toUpperCase();
	
	const cpf: string = generateCodeById(randomUser.id).toUpperCase();
	
	const dateBirth: Moment = moment().locale("pt-br").subtract(randomNumberInRange(18 * 365, 60 * 365), 'd');
	
	const idDateValidate: Moment = moment().locale("pt-br").add(randomNumberInRange(1, 90), 'd');
	const driverLicenseDateValidate: Moment = moment().locale("pt-br").add(randomNumberInRange(1, 90), 'd');

	const docs: IDocuments = {
		id: {
			name: randomName,
			cpf: cpf,
			dateBirth: dateBirth,
			dateValidate: idDateValidate,
		},
		driverLicense: {
			name: randomName,
			cpf: cpf,
			dateValidate: driverLicenseDateValidate,
		},
		// workVisa: {
		// 	name: randomName,
		// 	cnpj: generateCodes(),
		// 	dateValidate: moment().locale("pt-br").add(randomNumberInRange(-6, 6), 'd'),
		// }
	};

	if (isFalsified) {
		const docsFalsified = falsifyDocs(docs);
		return docsFalsified;
	}

	return docs;
}

export default generateRandomDocs;