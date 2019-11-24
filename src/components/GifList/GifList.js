import React, { memo } from "react";
import GifView from "./GifView";

import "./Gif.sass";

const GifList = memo(({ gifs = [] }) => {
  return (
    <div className="gif-list">
      <div className="gif-wrapper">
        {gifs.map((gif, index) => (
          <GifView key={index.toString()} src={gif.images.downsized.url} />
        ))}
      </div>
    </div>
  );
});

export default GifList;
