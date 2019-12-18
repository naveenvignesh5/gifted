import React, { memo, useState } from "react";
import { useSelector } from 'react-redux';

import "./Gif.sass";

const GifView = memo(({ src, staticSrc }) => {
  const [imageLoaded, updateImageLoaded] = useState(false);
  const [dynamicImageLoaded, updateDynamicImageLoaded] = useState(false);
  
  const isPlaying = useSelector(state => state.gif.isPlaying);

  return (
    <div className={`gif-image-wrapper ${isPlaying ? 'is-active' : ''}`}>
      {(!imageLoaded || !dynamicImageLoaded) && (
        <div
          className="gif-loading"
        >
          Loading GIF...
        </div>
      )}
      <img
        className="gif-image static"
        onLoad={() => {
          updateImageLoaded(true);
        }}
        src={staticSrc}
        alt="animated"
      />
      <img
        className="gif-image dynamic"
        onLoad={() => {
          updateDynamicImageLoaded(true);
        }}
        src={src}
        alt="animated"
      />
    </div>
  );
});

export default GifView;
