import { ACTION_TYPES } from "../actionTypes";

const initialState = {
  isFetching: false,
  isError: false,
  gifs: [],
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST_FETCH_GIFS:
      return Object.assign({}, state, initialState, { isFetching: true });
    case ACTION_TYPES.REQUEST_FETCH_GIFS_SUCCESS:
      return Object.assign({}, state, initialState, { gifs: action.payload });
    case ACTION_TYPES.REQUEST_FETCH_GIFS_FAILURE:
      return Object.assign({}, state, initialState, { isError: true, error: action.error });
    default:
      return state;
  }
};
