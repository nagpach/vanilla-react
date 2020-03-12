import React from "react";


import { TextareaField } from "./TextareaField";

export default {
	title: "Molecules/Forms/TextareaField"
};



export const Default = () => (
	<TextareaField
		fieldNote="This is a field note"
		ariaDescribedBy="textarea-field"
	/>
);

export const Required = () => (
	<TextareaField
		name="text-field-1"
		label="Label"
		type="text"
		required={true}
		placeholder="Placeholder"
		title="Please enter the proper text into the field."
		fieldNote="This is a required field."
		ariaDescribedBy="required-textarea-field"
	/>
);

export const Disabled = () => (
	<TextareaField
		name="text-field-1"
		label="Label"
		type="text"
		placeholder="Placeholder"
		title="Please enter the proper text into the field."
		fieldNote="The is a disabled field."
		ariaDescribedBy="disabled-textarea-field"
		disabled
	/>
);

export const Error = () => (
	<TextareaField
		hasError
		name="text-field-1"
		label="Label"
		type="text"
		required
		placeholder="Placeholder"
		title="Please enter the proper text into the field."
		fieldNote="There is an error."
		ariaDescribedBy="error-textarea-field"
	/>
);
