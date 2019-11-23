import React from "react";
import GifView from "./GifView";

import './Gif.sass';

const GifWrapper = ({ gifs = [] }) => {
  return (
    <div className="gifs-wrapper">
      {gifs.map((gif, index) => (
        <GifView
          key={index.toString()}
          src={`https://media.giphy.com/media/${gif.id}/giphy.gif`}
        />
      ))}
    </div>
  );
};

export default GifWrapper;
