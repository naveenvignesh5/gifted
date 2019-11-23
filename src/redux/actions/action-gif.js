import { ACTION_TYPES } from "../actionTypes";
import { GIF_COUNT_PER_PAGE } from "../../constants";

const requestGif = () =>  ({
    type: ACTION_TYPES.REQUEST_FETCH_GIFS,
});

const requestGifSuccess = (payload) => ({
    type: ACTION_TYPES.REQUEST_FETCH_GIFS_SUCCESS,
    payload,
});

const requestGifFailure = (error) => ({
    type: ACTION_TYPES.REQUEST_FETCH_GIFS_FAILURE,
    error,
});

const fetchGifs = (searchObj) => async dispatch => {
    try {
        dispatch(requestGif());
        const res = await axios.get(`/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${searchObj.q}&limit=${GIF_COUNT_PER_PAGE}`); // eslint-disable-line
        if (res.data) {
            dispatch(requestGifSuccess(res.data.data));
            return;
        }
        dispatch(requestGifFailure('no-data-found'));
    } catch (err) {
        dispatch(requestGifFailure(err));
    }
}

export { fetchGifs };
