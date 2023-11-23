import moment from "moment";

import { IDocuments } from "../../../interfaces/documents.interfaces";
import randomNumberInRange from "../../general/randomInRange";

const falsifyDriverLicenseDateValidate = (docs: IDocuments): IDocuments => {
	if (docs.driverLicense) {
		docs.driverLicense.dateValidate = moment().locale("pt-br").subtract(randomNumberInRange(1, 30), 'd');
	}

	return docs
}

export default falsifyDriverLicenseDateValidate;