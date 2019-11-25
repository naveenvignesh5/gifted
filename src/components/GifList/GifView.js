import React, { memo, useState } from "react";

import "./Gif.sass";

const GifView = memo(({ src, staticSrc }) => {
  const [imageLoaded, updateImageLoaded] = useState(false);
  const [dynamicImageLoaded, updateDynamicImageLoaded] = useState(false);

  return (
    <div className="gif-image-wrapper">
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
