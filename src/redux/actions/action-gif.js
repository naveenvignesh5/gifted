import axios from "axios";

import { ACTION_TYPES } from "../actionTypes";
import { GIF_COUNT_PER_PAGE, API_ENDPOINT } from "../../constants";

const requestGif = () => ({
  type: ACTION_TYPES.REQUEST_FETCH_GIFS
});

const requestGifSuccess = payload => ({
  type: ACTION_TYPES.REQUEST_FETCH_GIFS_SUCCESS,
  payload
});

const requestGifFailure = error => ({
  type: ACTION_TYPES.REQUEST_FETCH_GIFS_FAILURE,
  error
});

const requestPlayToggle = (play = false) => ({
  type: play ? ACTION_TYPES.REQUEST_PLAY : ACTION_TYPES.REQUEST_PAUSE
});

const fetchGifs = searchObj => async dispatch => {
  try {
    dispatch(requestGif());
    const queryString = Object.keys(searchObj)
      .map(key => key + "=" + searchObj[key])
      .join("&");
    const res = await axios.get(
      `${API_ENDPOINT}/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&${queryString}&limit=${GIF_COUNT_PER_PAGE}`
    ); // eslint-disable-line
    console.log(JSON.stringify(res.data));
    if (res.data) {
      dispatch(requestGifSuccess(res.data));
      return;
    }
    dispatch(requestGifFailure("no-data-found"));
  } catch (err) {
    console.log(err);
    dispatch(requestGifFailure(err));
  }
};

const togglePlay = play => dispatch => {
    dispatch(requestPlayToggle(play));
};

export { fetchGifs, requestGif, togglePlay };
