import React, { memo, useState } from "react";

import "./Gif.sass";

const GifView = memo(({ src }) => {
  const [imageLoaded, updateImageLoaded] = useState(false);

  return (
    <div className="gif-image-wrapper">
      <div className="gif-loading" style={{ display: imageLoaded ? 'none' : 'flex' }}>Loading GIF...</div>
      {imageLoaded && <div className="gif-image-overlay">
        <a className="download-button" href={src}>View</a>
      </div>}
      <img
        className="gif-image"
        style={{ display: imageLoaded ? 'block' : 'none' }}
        onLoad={() => {
          console.log('image loaded')
          updateImageLoaded(true);
        }}
        src={src}
        alt="animated"
      />
    </div>
  );
});

export default GifView;
