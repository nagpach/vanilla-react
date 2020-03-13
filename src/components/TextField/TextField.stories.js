import React from "react";

import { TextField } from "./TextField";

export default { 
	title: "Molecules/Forms/TextField"
};



export const Default = () => (
	<TextField
		name="text-field-1"
		type="text"
		placeholder="Placeholder"
		title="Please enter the proper text into the field."
		fieldNote="This is the field note."
		ariaDescribedBy="text-field"
	/>
);

export const Required = () => (
	<TextField
		name="text-field-1"
		label="Label"
		type="text"
		required={true}
		placeholder="Placeholder"
		title="This is a required field. Please enter the proper information"
		fieldNote="This is a required field."
		ariaDescribedBy="required-text-field"
	/>
);

export const Disabled = () => (
	<TextField
		name="text-field-1"
		label="Label"
		type="text"
		placeholder="Placeholder"
		title="Please enter the proper text into the field."
		fieldNote="The is a disabled field."
		ariaDescribedBy="disabled-text-field"
		disabled
	/>
);

export const Email =  () => (
	<TextField
		name="text-field-1"
		label="Label"
		type="email"
		required
		placeholder="Placeholder"
		title="Please enter a valid email address."
		fieldNote="This is a fieldnote."
		ariaDescribedBy="error-text-field"
	/>
);

export const Error = () => (
	<TextField
		hasError
		name="text-field-1"
		label="Label"
		type="text"
		required
		placeholder="Placeholder"
		title="Please enter the proper text into the field."
		fieldNote="There is an error."
		ariaDescribedBy="error-text-field"
	/>
);
