import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import '../../node_modules/react-vis/dist/style.css';
import { RadialChart, Hint } from 'react-vis';
import API from "../utils/API";

export default class SimpleRadialChart extends Component {
	state = {
		value: false,
		expenses:[]
	};

	componentDidMount = () => {
		API.getExpenses().then((response)=>{
			this.setState({expenses: response.data.expenses});
			console.log(this.state.expenses);
		});
		
	};

	calculate_theta = () =>{

	};
	
	render() {
		const { value } = this.state;
		this.calculate_theta();
		return (
			<RadialChart
				className={'donut-chart-expenses'}
				innerRadius={100}
				radius={140}
				getAngle={d => d.theta}
				data={[
					{ theta: 1, className: 'custom-class' },
					{ theta: 2 },
	
				]}
				onValueMouseOver={v => this.setState({ value: v })}
				onSeriesMouseOut={v => this.setState({ value: false })}
				width={300}
				height={300}
				padAngle={0.04}
			>
				{value !== false && <Hint value={value} />}
			</RadialChart>
		);
	}
}