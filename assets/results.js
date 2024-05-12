"use strict";

const videoContainer = document.querySelector( "#video-container" );

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

const onPageLoad = async function() {
  const youtubeData = JSON.parse( localStorage.getItem( "youtubeData" ) ) || [];
  const youtubeItems = [ ...youtubeData.items ];
  const videosHTML = createVideosHTML( youtubeItems );
  renderVideos( videosHTML );
}

onPageLoad();