import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
	const list = [
		{
			name: "naman",
			percent: 60.0000
		},
		{
			name: "ritesh",
			percent: 99.9431
		},
		{
			name: "hitesh",
			percent: 65.3365
		},
		{
			name: "shreya",
			percent: 80.6400
		},
		{
			name: "ankur",
			percent: 78.8970
		},
		{
			name: "vanshu",
			percent: 78.9876
		},
		{
			name: "krupal",
			percent: 85.3214
		},
	];

	return (
		<div id="main">
			{list.map(function (item, index) {
				if (item.percent > 0) {
					return (
            <>
              {/*Conditional statement in the className of below div to give callName="bg-pink"*/}
				   		{/*if the percent >= 90 else className = "" */}
				   				<div key={index} className={item.percent >=90?"bg-pink":""}>
					   				<div className="name">
					   					{item.name}
					   				</div>
					   				<div className="percent">
					   					 {item.percent.toFixed(2)}
					   				</div>
				   				</div>
            </>
					);
				}
			})}
		</div>
	);
}

export default App;
