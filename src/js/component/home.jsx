import React, { useState } from 'react';
import TrafficLight from "./TrafficLight.jsx";


const Home = () => {

	const {activeColor, setActiveColor} = useState("red");
	return (
		<div className="">
			<div className="center-container">
				<div className="traffic-container">
					<TrafficLight activeColor={activeColor} trafficLightColor="red" />
					<TrafficLight activeColor={activeColor} trafficLightColor="yellow" />
					<TrafficLight activeColor={activeColor} trafficLightColor="green" />
				</div>
			</div>
		</div>
	);
};

export default Home;