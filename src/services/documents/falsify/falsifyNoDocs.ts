import { IDocuments } from "../../../interfaces/documents.interfaces";
import randomNumberInRange from "../../general/randomInRange";

const falsifyNoDocs = (docs: IDocuments): IDocuments => {
	const keys = Object.keys(docs);

	const amountNoDoc = randomNumberInRange(1, keys.length);

	const indexDocs: number[] = [];
	
	let count = 0;
	while (count < amountNoDoc) {
		const indexDoc = randomNumberInRange(1, keys.length);
		
		if (!indexDocs.includes(indexDoc)) {
			indexDocs.push(indexDoc);
			++count;
		}
	}

	indexDocs.forEach(i => {
		switch (i) {
			case 1:
				docs.id = undefined;
				break;
			case 2:
				docs.driverLicense = undefined;
				break;
			default:
				break;
		}
	})

	return docs;
}

export default falsifyNoDocs;