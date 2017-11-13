import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search';
//Create a new component, this component should produce
//Some html

const API_KEY = 'AIzaSyBbe2PYb0Qu5MsbiW4mTLs1CmEPaVvh5e8';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data);
})

//1) const is ES6 piece of syntax
//    we are never going to reassign app, like later saying app = 5;
//2) This is a class of component, not an actual instance
//3) To make it an instance, <App /> 
//4) always only one component per file
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

//Take this components generated HTML and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

/*Note
React operates on the concept of downard data flow, with the
most parent component being the 'source of truth'
*/