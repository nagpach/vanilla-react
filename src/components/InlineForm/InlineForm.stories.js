import React from "react";


import { InlineForm } from "./InlineForm";

export default { 
	title: "Molecules/Forms/InlineForm"
}

export const Default = () => (
	<InlineForm
		label="Search"
		method="post"
		action="http://google.com"
		id="demo-form-id"
		placeholder="Placeholder"
		cta="Action"
	/>
);
