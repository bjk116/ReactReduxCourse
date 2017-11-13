import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		//only time we ever use this sort of code
		//to manipulate state
		this.state = { term: '' };
	}

	//1) All input elements have an onChange element
	//2) We pass an event handler to the element who we want to montior
	//3) Every class based component needs a render method
	//4) all inputs, buttons etc all emit a event object
	//A controlled input is a form element who's input is controlled by state, not the other way around
	//<input onChange={event => this.setState({ term: event.target.value })} />
		//this is the input telling the state what it should be
	//<input value={this.state.term} /> this is a controlled component, input changes based on state
	render() {
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value})}
				/>
				<br />
				Value of Input: {this.state.term}
			</div>
		);
	}
}

export default SearchBar;