import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchGifs } from "../../redux/actions/action-gif";

// components
import SearchBar from "../../components/SearchBar";
import GifList from "../../components/GifList";
import PaginationTab from "../../components/PaginationTab";

// styles
import "./home.sass";
import { GIF_COUNT_PER_PAGE, DEFAULT_GIF_SEARCH_QUERY } from "../../constants";

class Home extends Component {
  state = {
    currentPage: 1,
    query: DEFAULT_GIF_SEARCH_QUERY
  };

  componentDidMount() {
    this.props.fetchGifs({ q: DEFAULT_GIF_SEARCH_QUERY });
  }

  updatePage = currentPage => {
    const offset = ((currentPage - 1) * GIF_COUNT_PER_PAGE) + 1;
    this.setState({ currentPage }, () => {
      this.props.fetchGifs({
        q: this.state.query,
        offset,
      });
    });
  };

  handleOnQueryChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleFetchGifs = (query, offset = 1) => {
    this.props.fetchGifs({ q: query, offset });
  };

  renderGifs = () => {
    const { gifs, fetchingGifs, fetchingGifsError } = this.props;

    if (gifs && gifs.length > 0) return <GifList gifs={gifs} />;

    if (fetchingGifs || fetchingGifsError) {
      return (
        <div className="gif-status-section">
          {fetchingGifs && <p className="status-text">Loading...</p>}
          {fetchingGifsError && (
            <p className="status-text">Unable to load gifs.</p>
          )}
        </div>
      );
    }

    return (
      <div className="gif-status-section">
        <p className="status-text">No Gifs Found.</p>;
      </div>
    );
  };

  render() {
    const { currentPage } = this.state;
    return (
      <div className="container">
        <SearchBar
          onSearchPress={() => this.handleFetchGifs(this.state.query)}
          onChange={this.handleOnQueryChange}
          placeholder="Search a gif..."
          defaultValue="cats"
        />
        <PaginationTab
          totalPages={this.props.totalPages}
          onPrevButtonPress={this.updatePage}
          onNextButtonPress={this.updatePage}
          onPagePress={this.updatePage}
          currentPage={currentPage}
        />
        {this.renderGifs()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gifs: state.gif.gifs,
  fetchingGifs: state.gif.isFetching,
  fetchingGifsError: state.gif.isError ? state.gif.error : null,
  totalPages: state.gif.totalPages,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGifs }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
