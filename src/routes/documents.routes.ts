import express from 'express';
import crypto from 'crypto';
import moment from 'moment';
import { IDocuments } from '../interfaces/documents.interfaces';

const route = express();

const randomNumberInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateCodes = () => {
	const uuid = crypto.randomUUID();

  const uuidSplitted = uuid.split("-");
  return `${uuidSplitted[1]}-${uuidSplitted[2]}`;
}

route.get("/random", (req, res) => {
	const names = ["Davi", "Naul", "Elder", "Fan", "Jason"];
	const d = [] as any[];
	names.forEach(n => {
		const docs: IDocuments = {
			id: {
				name: n,
				cpf: generateCodes(),
        dateBirth: moment().locale("pt-br").add(randomNumberInRange(-6, 6), 'd'),
				dateValidate: moment().locale("pt-br").add(randomNumberInRange(-6, 6), 'd'),
			},
			driverLicense: {
				name: n,
				cpf: generateCodes(),
				dateValidate: moment().locale("pt-br").add(randomNumberInRange(-6, 6), 'd'),
			},
			// workVisa: {
			// 	name: n,
			// 	cnpj: generateCodes(),
			// 	dateValidate: moment().locale("pt-br").add(randomNumberInRange(-6, 6), 'd'),
			// }
		};
		d.push(docs);
	});

	res.status(200).json(d);
});

export default route;