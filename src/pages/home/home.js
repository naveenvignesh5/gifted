import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchGifs } from "../../redux/actions/action-gif";

// components
import SearchBar from "../../components/SearchBar";
import GifList from "../../components/GifList";
import PaginationTab from "../../components/PaginationTab";

class Home extends Component {
  state = {
    currentPage: 1
  };

  componentDidMount() {
    this.props.fetchGifs({ q: "cats" });
  }

  updatePage = currentPage => this.setState({ currentPage });

  renderGifs = () => {
    const { gifs, fetchingGifs, fetchingGifsError } = this.props;

    if (gifs && gifs.length > 0) {
      return <GifList gifs={gifs} />;
    }

    return (
      <div>
        {fetchingGifs && <p>Fetching Gifs...</p>}
        {fetchingGifsError && <p>Something went wrong.</p>}
      </div>
    );
  };

  render() {
    const { currentPage } = this.state;
    return (
      <div className="container">
        <SearchBar placeholder="Search a gif..." />
        {this.renderGifs()}
        <PaginationTab onPagePress={this.updatePage} currentPage={currentPage} />
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
