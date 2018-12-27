import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

class Baner extends Component {
 

    render() {
        const images = [
      {
        original: process.env.PUBLIC_URL + '/img/baner/slide-1.png',
      },
      {
        original: process.env.PUBLIC_URL + '/img/baner/slide-2.png',
      },
      {
        original: process.env.PUBLIC_URL + '/img/baner/slide-3.png',
      },
      {
        original: process.env.PUBLIC_URL + '/img/baner/slide-4.png',
      }
    ]
 
    return (
    	<div id="inicio">	
	      <ImageGallery items={images} 
	      				autoPlay={true} 
	      				showNav={false} 
	      				showThumbnails={false} 
	      				showPlayButton={false}
	      				showFullscreenButton={false}/>
    	</div>
    );
  }
 
}

export default Baner;
