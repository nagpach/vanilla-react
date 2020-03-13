import React, { PropTypes } from "react";

import { SelectField } from "./SelectField";

export default { 
	title: "Molecules/Forms/SelectField"
};


export const Default =  () => (
	<SelectField
		listItems={[
			{
				value: "value-1",
				option: "Value 1"
			},
			{
				value: "value-2",
				option: "Value 2"
			},
			{
				optGroupLabel: "Group 1",
				optGroupItems: [
					{
						value: "value-3",
						option: "Value 3"
					},
					{
						value: "value-4",
						option: "Value 4"
					},
					{
						value: "value-5",
						option: "Value 5"
					}
				]
			}
		]}
	/>
);

export const Required =  () => <SelectField required />;
export const Disabled = () => <SelectField disabled />;
export const  Error = () => <SelectField hasError />;
