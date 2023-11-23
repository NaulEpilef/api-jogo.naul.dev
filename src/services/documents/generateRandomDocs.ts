import moment, { Moment } from "moment";

import { IDocuments } from "../../interfaces/documents.interfaces";

import randomNumberInRange from "../general/randomInRange";
import generateCodes from "../general/generateCode";
import falsifyDocs from "./falsifyDocs";

const generateRandomDocs = () => {
	const names: string[] = ["Davi", "Naul", "Elder", "Fan", "Jason", "alans"];

	const isFalsified: boolean = randomNumberInRange(1, 100) <= 30;
	
  const randomName: string = names[randomNumberInRange(0, names.length-1)].toUpperCase();
	
	const cpf: string = generateCodes().toUpperCase();
	
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