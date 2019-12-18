import React from "react";

// import { useSelector, useDispatch } from 'react-redux';

import "./Tag.sass";

const Tag = ({ text, onTagPress, isActive = false }) => {
  return (
    <button
      className={`tag ${isActive ? "is-active" : ""}`}
      onClick={() => {
        onTagPress(text);
      }}
      // href="javascript:void(0);"
    >
      {text}
    </button>
  );
};

export default Tag;
