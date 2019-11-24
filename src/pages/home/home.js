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

class Home extends Component {
  state = {
    currentPage: 1,
    query: ""
  };

  componentDidMount() {
    this.props.fetchGifs({ q: "cats" });
  }

  updatePage = currentPage => this.setState({ currentPage });

  handleOnQueryChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleFetchGifs = query => {
    this.props.fetchGifs({ q: query });
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
    )
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
        {this.renderGifs()}
        <PaginationTab
          onPagePress={this.updatePage}
          currentPage={currentPage}
        />
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
