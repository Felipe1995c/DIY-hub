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

// Working on
const fetchNextPage = async function( nextPageToken ) {
  const nextPageRes = await fetch( `${ apiObj.searchUrl }?key=${ apiObj.key }&type=video&maxResults=3&order=viewCount&q=ducks&pageToken=${ nextPageToken }` );
  const nextPageData = await nextPageRes.json();
  return nextPageData
}

const setNextPageToken = function( youtubeData ) {
  nextPageToken = youtubeData.nextPageToken;
}

const setPreviousPageToken = function( youtubeData ) {
  previousPageToken = youtubeData.prevPageToken;
}

const setPageTokens = function( youtubeData ) {
  setNextPageToken( youtubeData );
  setPreviousPageToken( youtubeData );
}

const pageStart = async function() {
  const prevBtn = document.querySelector( ".prev-btn" );
  const page = document.querySelector( ".page" );
  const nextBtn = document.querySelector( ".next-btn" );
  const videoContainer = document.querySelector( "#video-container" );
  const youtubeData = JSON.parse( localStorage.getItem( "youtubeData" ) ) || [];
  const youtubeItems = [ ...youtubeData.items ];
  const videosHTML = createVideosHTML( youtubeItems );
  setNextPageToken( youtubeData );

  renderVideos( videoContainer, videosHTML );

  nextBtn.addEventListener( "click", async function() {
    const youtubeData = await fetchNextPage( nextPageToken );
    setPageTokens( youtubeData );
    console.log( youtubeData );
    console.log( nextPageToken );
    console.log( previousPageToken );
    const youtubeItems = [ ...youtubeData.items ];
    const videosHTML = createVideosHTML(  );
  } );
}

pageStart();






/*
Tumblr Info
secret: kwEd1LlTk0RwFcE9dPrQCgY4Y1oOCuJylcjwd92n99L4xlFEjT 
oAuth Consumer Key: zERLc2rZrUZmPFug5AJoDZf3X0IAkt8rJ7asb784X5PijekyyZ
Tumblr Base URL: https://api.tumblr.com
*/