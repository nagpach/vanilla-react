import React from "react";

import { Logo } from "./Logo";

import logoimg from "../../images/fpo-120x60.png";

export default { 
	title: "Molecules/Global/Logo"
}



export const Default = () => (
	<Logo href="http://bradfrost.com" src={logoimg} alt="Company Name" />
);
