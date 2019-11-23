import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchGifs } from "../../redux/actions/action-gif";

// components
import SearchBar from "../../components/SearchBar";
import GifWrapper from "../../components/GifView/GifWrapper";

class Home extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchGifs({ q: "cats" });
  }

  renderGifs = () => {
    const { gifs, fetchingGifs, fetchingGifsError } = this.props;

    if (fetchingGifs) return <p>Fetching Gifs</p>;

    if (fetchingGifsError) return <p>Something went wrong !!!</p>;

    if (gifs && gifs.length > 0) {
      return (
        <GifWrapper gifs={gifs} />
      );
    }

    console.log(gifs);

    return null;
  };

  render() {
    return (
      <div className="container">
        <SearchBar placeholder="Search a gif..." />
        {this.renderGifs()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gifs: state.gif.gifs,
  fetchingGifs: state.gif.isFetching,
  fetchingGifsError: state.gif.isError ? state.gif.error : null
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGifs }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
