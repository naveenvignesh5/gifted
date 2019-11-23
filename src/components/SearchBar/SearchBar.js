import React, { PureComponent } from "react";

import './SearchBar.sass';

class SearchBar extends PureComponent {
  state = {};
  
  render() {
    const { ...inputProps } = this.props;
    return (
      <div className="search-bar-wrapper">
        <input className="search-bar-input" {...inputProps} />
      </div>
    );
  }
}

export default SearchBar;
