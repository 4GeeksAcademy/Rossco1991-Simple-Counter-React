import React from "react";
import { Countup } from "./counter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Countup max={9999}/>
		</div>
	);
};

export default Home;
