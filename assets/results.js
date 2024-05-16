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

const createPhotosHTML = function( tumblrPhotoUrls ) {
  let photosHTML = "";
  for( const url of tumblrPhotoUrls ) {
    photosHTML += `<img src="${ url }" class="cell" alt="DIY Image">`;
  }
  return photosHTML;
}

const renderPhotos = function( photosContainer, photosHTML ) {
  photosContainer.innerHTML = photosHTML;
}

const pageStart = async function() {
  const videoContainer = document.querySelector( "#video-container" );
  const youtubeData = JSON.parse( localStorage.getItem( "youtubeData" ) ) || [];
  const youtubeItems = [ ...youtubeData.items ];
  const videosHTML = createVideosHTML( youtubeItems );

  renderVideos( videoContainer, videosHTML );

  const photosContainer = document.querySelector( ".photos-container" );
  const tumblrPhotoItems = JSON.parse( localStorage.getItem( "tumblrPhotoItems" ) );
  const tumblrPhotoUrls = [];
  for( const item of tumblrPhotoItems ) {
    tumblrPhotoUrls.push( item.photos[ 0 ].original_size.url );
  }
  const photosHTML = createPhotosHTML( tumblrPhotoUrls );
  renderPhotos( photosContainer, photosHTML );
}

pageStart();