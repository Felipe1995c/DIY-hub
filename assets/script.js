"use strict";

// API KEY
// AIzaSyAHHiqc8V6WsxjRWYaSWUxWggO_bjRvWUw

fetch( `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAHHiqc8V6WsxjRWYaSWUxWggO_bjRvWUw&q=anime&part=snippet&type=video` )
  .then( function( res ) {
    return res.json();
  } )
  .then( function( data ) {
    console.log( data );
  } );