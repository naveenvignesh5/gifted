import React, { PureComponent } from "react";

import './SearchBar.sass';

class SearchBar extends PureComponent {
  state = {};
  
  render() {
    const { onSearchPress, ...inputProps } = this.props;
    return (
      <div className="search-bar-wrapper">
        <input className="search-bar-input" {...inputProps} />
        <button className="search-button" onClick={onSearchPress}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
