"use strict";

const createVideosHTML = function( youtubeItems ) {
  let videosHTML = "";
  for( const item of youtubeItems ) {
    const { id : { videoId } } = item;
    videosHTML += 
      `<iframe width="560" height="315" src="https://www.youtube.com/embed/${ videoId }"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  }
  return videosHTML;
}

const renderVideos = function( videoContainer, videosHTML ) {
  videoContainer.innerHTML = videosHTML;
}

const pageStart = async function() {
  const videoContainer = document.querySelector( "#video-container" );
  const youtubeData = JSON.parse( localStorage.getItem( "youtubeData" ) ) || [];
  const youtubeItems = [ ...youtubeData.items ];
  const videosHTML = createVideosHTML( youtubeItems );

  renderVideos( videoContainer, videosHTML );
}

pageStart();






/*
Tumblr Info
secret: kwEd1LlTk0RwFcE9dPrQCgY4Y1oOCuJylcjwd92n99L4xlFEjT 
oAuth Consumer Key: zERLc2rZrUZmPFug5AJoDZf3X0IAkt8rJ7asb784X5PijekyyZ
Tumblr Base URL: https://api.tumblr.com
*/