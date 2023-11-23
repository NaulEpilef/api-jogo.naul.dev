import { IDocuments } from "../../interfaces/documents.interfaces";

import randomNumberInRange from "../general/randomInRange";
import falsifyCpf from "./falsify/falsifyCpf";
import falsifyDriverLicenseDateValidate from "./falsify/falsifyDriverLicenseDateValidate";
import falsifyIdDateValidate from "./falsify/falsifyIdDateValidate";
import falsifyName from "./falsify/falsifyName";

const falsifyDocs = (docs: IDocuments): IDocuments => {
	const idErrors: number[] = [];
	const errorsAmount = randomNumberInRange(1, 5);
	// const errorsAmount = randomNumberInRange(1, 1);

	let count = 0;
	while (count < errorsAmount) {
		const idError = randomNumberInRange(1, 5);
		// const idError = randomNumberInRange(1, 1);

		if (!idErrors.includes(idError)) {
			idErrors.push(idError);
			++count;
		}
	}

	idErrors.forEach(id => {
		switch (id) {
			case 1:
				docs = falsifyName(docs);
				console.log("Nomes entre documentos diferentes");
				break;
			case 2:
				docs = falsifyIdDateValidate(docs);
				console.log("Validade da identidade vencida");
				break;
			case 3:
				docs = falsifyDriverLicenseDateValidate(docs);
				console.log("Validade da habilitação vencida");
				break;
			case 4:
				docs = falsifyCpf(docs);
				console.log("CPF não está batendo entre os documentos");
				break;
			case 5:
				console.log("Não levar algum documento");
				break;
			default:
				break;
		}
	})

	return docs;
}

export default falsifyDocs;