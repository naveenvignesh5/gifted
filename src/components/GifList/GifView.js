import React, { memo, useState } from "react";

import "./Gif.sass";

const GifView = memo(({ src }) => {
  const [imageLoaded, updateImageLoaded] = useState(false);

  return (
    <>
      <div className="gif-loading" style={{ display: imageLoaded ? 'none' : 'flex' }}>Loading GIF...</div>
      <img
        style={{ display: imageLoaded ? 'block' : 'none' }}
        onLoad={() => {
          console.log('image loaded')
          updateImageLoaded(true);
        }}
        width="200px"
        height="200px"
        src={src}
        alt="animated"
      />
    </>
  );
});

export default GifView;
