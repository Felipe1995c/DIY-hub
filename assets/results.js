"use strict";

const prevBtn = document.querySelector( ".prev-btn" );
const page = document.querySelector( ".page" );
const nextBtn = document.querySelector( ".next-btn" );
const videoContainer = document.querySelector( "#video-container" );

const apiObj = {
  key : "AIzaSyAHHiqc8V6WsxjRWYaSWUxWggO_bjRvWUw",
  searchUrl : "https://www.googleapis.com/youtube/v3/search"
}

// Will create the dynamic HTML for each youtube item ( video )
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

const renderVideos = function( videosHTML ) {
  videoContainer.innerHTML = videosHTML;
}

// Working on
const fetchNextPage = async function( pageToken ) {
  const nextPageRes = await fetch( `${ apiObj.searchUrl }?key=${ apiObj.key }&type=video&maxResults=3&order=viewCount&pageToken=${ pageToken }` );
  const nextPageData = await nextPageRes.json();
  console.log( nextPageData );
}

// Working on
nextBtn.addEventListener( "click", function() {
  console.log( "clicked" );
  fetchNextPage( youtubeData.nextPageToken );
} );

const onPageLoad = async function() {
  const youtubeData = JSON.parse( localStorage.getItem( "youtubeData" ) ) || [];
  const youtubeItems = [ ...youtubeData.items ];
  const videosHTML = createVideosHTML( youtubeItems );
  renderVideos( videosHTML );
  console.log( youtubeData );
}

onPageLoad();

/*
Tumblr Info
secret: kwEd1LlTk0RwFcE9dPrQCgY4Y1oOCuJylcjwd92n99L4xlFEjT 
oAuth Consumer Key: zERLc2rZrUZmPFug5AJoDZf3X0IAkt8rJ7asb784X5PijekyyZ
Tumblr Base URL: https://api.tumblr.com
*/