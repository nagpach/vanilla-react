import React from "react";

import { Hero } from "./Hero";
import heroImg from "../../images/fpo-1200x650.png";

export default { 
	title:"Molecules/Blocks/Hero"
};



const hero = {
	imgsrc: { heroImg },
	imgalt: "Alt text",
	title: "Hero Title",
	description: "This is the hero description"
};

export const Default = () => (
	<Hero
		imgsrc={heroImg}
		imgalt="Alt Txt"
		title="Hero Title"
		description="Hero description"
	/>
);
