"use strict";

const searchInput = document.querySelector( "#search-input" );
const searchBtn = document.querySelector( "#search-btn" );

const apiObj = {
  key : "AIzaSyAHHiqc8V6WsxjRWYaSWUxWggO_bjRvWUw",
  searchUrl : "https://www.googleapis.com/youtube/v3/search"
}

// Fetch Data From Youtube API
const fetchYoutubeApi = async function() {
  const searchRes = await fetch( `${ apiObj.searchUrl }?key=${ apiObj.key }&q=ducks&type=video&maxResults=3&order=viewCount` );
  const searchData = await searchRes.json();
  return searchData;
}

// Transfer Youtube Data to Local Storage
// Redirect to index.html page
searchBtn.addEventListener( "click", async function( event ) {
  event.preventDefault();
  const youtubeData = await fetchYoutubeApi();
  localStorage.setItem( "youtubeData", JSON.stringify( youtubeData ) );
  window.location.href = "./index.html"
} );