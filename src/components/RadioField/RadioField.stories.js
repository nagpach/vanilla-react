import React from "react";

import { RadioField } from "./RadioField";

export default { 
	title: "Molecules/Forms/RadioField"
}

export const Default = () => <RadioField />;

export const Required = () => (
	<RadioField
		required={true}
		listItems={[
			{
				id: "radio-1",
				name: "radioexample",
				text: "Radio 1",
				type: "radio"
			},
			{
				id: "radio-2",
				name: "radioexample",
				text: "Radio 2",
				type: "radio"
			},
			{
				id: "radio-3",
				name: "radioexample",
				text: "Radio 3",
				type: "radio"
			}
		]}
		fieldNote="This is a required field"
	/>
);

export const Disabled = () => (
	<RadioField
		fieldClass="c-field has-error"
		disabled
		listItems={[
			{
				id: "radio-1",
				name: "radioexample",
				text: "Radio 1",
				type: "radio",
				disabled: true
			},
			{
				id: "radio-2",
				name: "radioexample",
				text: "Radio 2",
				type: "radio",
				disabled: true
			},
			{
				id: "radio-3",
				name: "radioexample",
				text: "Radio 3",
				type: "radio",
				disabled: true
			}
		]}
		fieldNote="This is a disabled field"
	/>
);

export const Error = () => (
	<RadioField
		fieldClass="c-field has-error"
		hasError
		listItems={[
			{
				id: "radio-1",
				name: "radioexample",
				text: "Radio 1",
				type: "radio"
			},
			{
				id: "radio-2",
				name: "radioexample",
				text: "Radio 2",
				type: "radio"
			},
			{
				id: "radio-3",
				name: "radioexample",
				text: "Radio 3",
				type: "radio"
			}
		]}
		fieldNote="This is a field with an error."
	/>
);
