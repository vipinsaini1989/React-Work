import React from 'react';
import './App.css';
import './keyCode.css';

class KeyCode extends React.Component {
	constructor(){
		super();
		this.state={
			keyValue: ' '
			,buttonVal: 'Press a key'
		};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
    	window.addEventListener('keydown', this.handleChange);
  	}
  	
	handleChange(e){
		e.preventDefault();
		console.log(e.which)
		this.setState({
			keyValue: e.which
			,buttonVal: e.key
		})
		
	}

	render(){
		return(
			<div className="App">
				<div className="diplayBtn">{this.state.buttonVal} </div>
				<div className="KeyVal">{this.state.keyValue}</div>
			</div>
			);
	}
}
export default KeyCode;