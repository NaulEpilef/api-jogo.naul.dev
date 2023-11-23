import moment from "moment";

import { IDocuments } from "../../../interfaces/documents.interfaces";
import randomNumberInRange from "../../general/randomInRange";

const falsifyIdDateValidate = (docs: IDocuments): IDocuments => {
	if (docs.id) {
		docs.id.dateValidate = moment().locale("pt-br").subtract(randomNumberInRange(1, 30), 'd');
	}

	return docs
}

export default falsifyIdDateValidate;