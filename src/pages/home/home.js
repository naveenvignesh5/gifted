import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchGifs, togglePlay } from "../../redux/actions/action-gif";

// components
import SearchBar from "../../components/SearchBar";
import GifList from "../../components/GifList";
import PaginationTab from "../../components/PaginationTab";
import Navbar from "../../components/Navbar/Navbar";

// styles
import "./home.sass";

// constants
import { GIF_COUNT_PER_PAGE, DEFAULT_GIF_SEARCH_QUERY } from "../../constants";
import ToggleSwitch from "../../components/ToggleSwitch";

class Home extends Component {
  state = {
    currentPage: 1,
    query: DEFAULT_GIF_SEARCH_QUERY,
    darkThemeEnabled: false,
  };

  componentDidMount() {
    this.props.fetchGifs({ q: DEFAULT_GIF_SEARCH_QUERY });
  }

  updatePage = currentPage => {
    const offset = (currentPage - 1) * GIF_COUNT_PER_PAGE + 1;
    this.setState({ currentPage }, () => {
      this.props.fetchGifs({
        q: this.state.query,
        offset
      });
    });
  };

  handleOnQueryChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleFetchGifs = (offset = 1) => {
    const { query = "" } = this.state;
    if (query && offset) {
      this.props.fetchGifs({ q: query, offset });
    }
  };

  handleOnKeyPress = e => {
    if (e.key === "Enter") {
      this.handleFetchGifs();
    }
  };

  handleThemeToggle = darkThemeEnabled => {
    this.setState({ darkThemeEnabled });
  };

  handlePlayToggle = isPlaying => {
    this.props.togglePlay(isPlaying);
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
    const { currentPage, darkThemeEnabled } = this.state;
    return (
      <div className={`container theme-${darkThemeEnabled ? "dark" : "light"}`}>
        <Navbar brandName="GIFted">
          <div className="label">{this.props.gifPlaying ? "Pause" : "Play"}</div>
          <ToggleSwitch
            onChange={e => this.handlePlayToggle(e.target.checked)}
          />
          &nbsp;&nbsp;
          <div className="label">
            {darkThemeEnabled ? "Dark Theme" : "Light Theme"}
          </div>
          <ToggleSwitch
            onChange={e => this.handleThemeToggle(e.target.checked)}
          />
        </Navbar>
        <SearchBar
          onSearchPress={() => this.handleFetchGifs()}
          onChange={this.handleOnQueryChange}
          onKeyPress={this.handleOnKeyPress}
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
  gifPlaying: state.gif.isPlaying,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGifs, togglePlay }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
