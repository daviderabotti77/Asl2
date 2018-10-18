import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends Component {
  constructor(props){
	  super(props);
	  this.state = {
		  elemento: 0, 
		  show: true
		};
	}
	
	IncrementItem = () => {
		this.setState({ elemento: this.state.elemento + 77});
	}
	
	DecreaseItem = () => {
		this.setState({ elemento: this.state.elemento - 77});
	}
	
	ToggleClick = () => {
		this.setState({ show: !this.state.show });
	}
	
	render(){
		return(
			<div className="Alternanza">
				<header className="Alternanza-impostazione">
					<button onClick = {this.IncrementItem}>Clicca per +77</button>
					<button onClick = {this.DecreaseItem}>Clicca per -77</button>
					<button onClick = {this.ToggleClick}>
						{	this.state.show ? 'Hide elemento' : 'Show elemento' }
					</button>
					{	this.state.show ? <h2>{ this.state.elemento } </h2> : ''}
					<img src={logo} className="Alternanza-logo" alt="logo" />
				</header>
			</div>
		);
	}
}

export default Counter;
