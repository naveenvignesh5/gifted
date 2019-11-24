import { ACTION_TYPES } from "../actionTypes";
import { GIF_COUNT_PER_PAGE } from "../../constants";

const initialState = {
  isFetching: false,
  isError: false,
  gifs: [],
  totalPages: 0,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST_FETCH_GIFS:
      return Object.assign({}, state, initialState, { isFetching: true });
    case ACTION_TYPES.REQUEST_FETCH_GIFS_SUCCESS:
      return Object.assign({}, state, initialState, { gifs: action.payload.data, totalPages: action.payload.pagination.total_count / GIF_COUNT_PER_PAGE });
    case ACTION_TYPES.REQUEST_FETCH_GIFS_FAILURE:
      return Object.assign({}, state, initialState, { isError: true, error: action.error });
    default:
      return state;
  }
};
