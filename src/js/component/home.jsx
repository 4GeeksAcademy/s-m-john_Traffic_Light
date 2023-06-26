import React from 'react';
import TrafficLight from "./TrafficLight.jsx";

export const TRAFFIC_LIGHT_COLORS = ['red', 'yellow', 'green'];

const Home = ( => {
	return (
		<div className="">

			<TrafficLight traffickLightColor="red" />
			<TrafficLight traffickLightColor="yellow" />
			<TrafficLight traffickLightColor="green" />
		
		</div>
	);
};

export default Home;