import React from 'react';

const VideoDetail = ( {video} ) => {
	//trick about embedding youtube video, the only thing that changes
	//is id of video, so we can craft our own embed url
	
	//how to check a null prop
	//generally, its better to do a loading spinner on a higher level component
	//to make sure you don't have like 10 spinners
	if(!video){
		return <div>Loading</div>;
	}
	const videoId = video.id.videoId;
	//if adding JS to regular string, use backticks
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;