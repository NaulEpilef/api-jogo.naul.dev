import { IDocuments } from "../../../interfaces/documents.interfaces";
import randomNumberInRange from "../../general/randomInRange";

const falsifyName = (docs: IDocuments): IDocuments => {
	// const keys = Object.keys(docs);
	
	// const indexDoc = randomNumberInRange(0, keys.length - 1);
	
	// const currentKey = keys[indexDoc];
  // const doc = docs[currentKey];
	// console.log(docs);

	const keys = Object.keys(docs);
	
	const indexDoc = randomNumberInRange(0, keys.length - 1);

	switch (indexDoc) {
		case 0:
			if (docs.id) {
				docs.id.name = docs.id?.name + 'ERROR';
			}
			break;
		case 1:
			if (docs.driverLicense) {
				docs.driverLicense.name = docs.driverLicense?.name + 'ERROR';
			}
			break;
		default:
			break;
	}

	return docs;
}

export default falsifyName;