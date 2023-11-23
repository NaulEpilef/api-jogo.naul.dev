import { IDocuments } from "../../../interfaces/documents.interfaces";
import randomNumberInRange from "../../general/randomInRange";

const falsifyCpf = (docs: IDocuments): IDocuments => {
	const keys = Object.keys(docs);
	
	const indexDoc = randomNumberInRange(0, keys.length - 1);

	switch (indexDoc) {
		case 0:
			if (docs.id) {
				docs.id.cpf = docs.id?.cpf + 'ERROR';
			}
			break;
		case 1:
			if (docs.driverLicense) {
				docs.driverLicense.cpf = docs.driverLicense?.cpf + 'ERROR';
			}
			break;
		default:
			break;
	}
	

	return docs;
}

export default falsifyCpf;