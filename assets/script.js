"use strict";

const apiObj = {
  key : "AIzaSyAHHiqc8V6WsxjRWYaSWUxWggO_bjRvWUw",
  searchUrl : "https://www.googleapis.com/youtube/v3/search"
}

const fetchYoutubeApi = async function( searchTerm ) {
  const searchRes = await fetch( `${ apiObj.searchUrl }?key=${ apiObj.key }&type=video&maxResults=6&order=viewCount&q=${ searchTerm } home improvement DIY` );
  const searchData = await searchRes.json();
  return searchData;
}

const pageStart = async function() {
  const searchBtn = document.querySelector( ".search-btn" );
  const searchModal = document.querySelector( ".modal" );

  searchBtn.addEventListener( "click", function() {
    searchModal.classList.add( "is-active" );
  } );
  
  searchModal.addEventListener( "click", async function( event ) {
    event.preventDefault();
    const target = event.target;
    if( !target.closest( ".modal-content" ) ) {
      searchModal.classList.remove( "is-active" );
    }
  
    if( target.classList.contains( "search-option" ) ) {
      const youtubeData = await fetchYoutubeApi( target.textContent );
      localStorage.setItem( "youtubeData", JSON.stringify( youtubeData ) );
      window.location.href = "./index.html";
      console.log( youtubeData );
    }
  } );
}

pageStart();

//Add hamburger dropdown menu to navbar

  document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {

          // Get the target from the "data-target" attribute
          const target = $el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

  });

