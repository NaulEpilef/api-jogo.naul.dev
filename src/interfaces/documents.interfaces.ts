import { Moment } from "moment";

export interface IDocuments {
	id?: IIdDocument;
	driverLicense?: IDriverLicenseDocument;
	// workVisa?: IWorkVisaDocument;
}

export interface IIdDocument {
	name: string;
	cpf: string;
	dateBirth?: Moment;
	dateValidate: Moment;
}

export interface IDriverLicenseDocument {
	name: string;
	cpf: string;
	dateValidate: Moment;
}

export interface IWorkVisaDocument {
	name: string;
	dateValidate: Moment;
	cnpj: string;
}