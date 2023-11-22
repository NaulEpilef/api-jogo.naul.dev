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
  const randomName = names[randomNumberInRange(0, names.length-1)];
  const docs: IDocuments = {
    id: {
      name: randomName,
      cpf: generateCodes(),
      dateBirth: moment().locale("pt-br").add(randomNumberInRange(-6, 6), 'd'),
      dateValidate: moment().locale("pt-br").add(randomNumberInRange(-6, 6), 'd'),
    },
    driverLicense: {
      name: randomName,
      cpf: generateCodes(),
      dateValidate: moment().locale("pt-br").add(randomNumberInRange(-6, 6), 'd'),
    },
    // workVisa: {
    // 	name: randomName,
    // 	cnpj: generateCodes(),
    // 	dateValidate: moment().locale("pt-br").add(randomNumberInRange(-6, 6), 'd'),
    // }
  };

	res.status(200).json(docs);
});

export default route;