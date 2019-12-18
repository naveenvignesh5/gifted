import { ACTION_TYPES } from "../actionTypes";
import { GIF_COUNT_PER_PAGE } from "../../constants";

const initialState = {
  isFetching: false,
  isError: false,
  gifs: [],
  totalPages: 0,
  error: null,
  isPlaying: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST_FETCH_GIFS:
      return Object.assign({}, initialState, state, { isFetching: true });
    case ACTION_TYPES.REQUEST_FETCH_GIFS_SUCCESS:
      return Object.assign({}, initialState, state, { gifs: action.payload.data, totalPages: action.payload.pagination.total_count / GIF_COUNT_PER_PAGE });
    case ACTION_TYPES.REQUEST_FETCH_GIFS_FAILURE:
      return Object.assign({}, initialState, state, { isError: true, error: action.error });
    case ACTION_TYPES.REQUEST_PLAY:
      return Object.assign({}, initialState, state, { isPlaying: true });
    case ACTION_TYPES.REQUEST_PAUSE:
      return Object.assign({}, initialState, state, { isPlaying: false });
    default:
      return state;
  }
};
