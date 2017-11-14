import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
//Create a new component, this component should produce
//Some html

const API_KEY = 'AIzaSyBbe2PYb0Qu5MsbiW4mTLs1CmEPaVvh5e8';



//1) const is ES6 piece of syntax
//    const app = means that we are never going to reassign app, like later saying app = 5;
//2) This is a class of component, not an actual instance
//3) To make it an instance, <App /> 
//4) always only one component per file

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		 };

		//initlaize videos state to surfboard search
		this.videoSearch("surfboards");
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			//this.setState({ videos: videos });
			//when key and value are same name, we can write above as
			this.setState({
				videos: videos,
				selectedVideo : videos[0]
			});
		});
	}

	render(){
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					videos = {this.state.videos}
					onVideoSelect = {selectedVideo => {this.setState({selectedVideo})}}
				/>
			</div>
		);
	}
}


//Take this components generated HTML and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

/*Note
React operates on the concept of downard data flow, with the
most parent component being the 'source of truth'
*/