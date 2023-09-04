export const REQUEST_TYPE = {
	PROOF: 'Proof',
	DATA: 'Data'
}

export const COUNTRY_REQUEST_TYPE = {
	INCLUDE: 'include',
	EXCLUDE: 'exclude'
}

export const requestList = ['General Identity Document', 'First name', 'Last name', `Driver's License`, 'Nationality', 'Email address', 'Age range', 'Birth date', 'List of countries to include', 'List of countries to exclude'];

export const credentialSubjectArray = [
	{ 
		text: "General Identity Document",
		key: "nationalID",
		type: REQUEST_TYPE.DATA	
	},
	{ 
		text: "First name",
		key: "firstname",
		type: REQUEST_TYPE.DATA
	},
	{ 
		text: "Last name",
		key: "lastname",
		type: REQUEST_TYPE.DATA
	},
	{ 
		text: "Driver's License",
		key: "driverLicense",
		type: REQUEST_TYPE.DATA
	},
	{ 
		text: "Nationality",
		key: "nationality",
		type: REQUEST_TYPE.DATA
	},
	{ 
		text: "Email address",
		key: "emailAddress",
		type: REQUEST_TYPE.DATA
	},
	{ 
		text: "Age range",
		key: "age",
		type: REQUEST_TYPE.PROOF
	},
	{ 
		text: "Birth date",
		key: "birthDate",
		type: REQUEST_TYPE.DATA
	},
	{ 
		text: "List of countries to include",
		key: "citizenship",
		type: REQUEST_TYPE.PROOF
	},
	{ 
		text: "List of countries to exclude",
		key: "citizenship",
		type: REQUEST_TYPE.PROOF
	},
]

export const countryList = ['UK','France', 'Italy','Cyprus','Finland'];

export type qrCodeDataType = {
	endpoint: string;
	socketID: string;
}
