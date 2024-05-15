"use strict";

const fetchYoutubeApi = async function() {
  const searchRes = await fetch( `${ apiObj.searchUrl }?key=${ apiObj.key }&type=video&maxResults=3&order=viewCount&q=ducks` );
  const searchData = await searchRes.json();
  return searchData;
}

const pageStart = async function() {
  const searchInput = document.querySelector( "#search-input" );
  const searchBtn = document.querySelector( "#search-btn" );


  searchBtn.addEventListener( "click", async function( event ) {
    event.preventDefault();
    const youtubeData = await fetchYoutubeApi();
    localStorage.setItem( "youtubeData", JSON.stringify( youtubeData ) );
    window.location.href = "./index.html";
  } );
}

pageStart();