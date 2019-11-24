import gifReducer from "./reducers/gif";

import testData from "./data";
import { ACTION_TYPES } from "./actionTypes";
import { GIF_COUNT_PER_PAGE } from "../constants";

const response_data = testData;

describe("Redux Reducer Test", () => {
  // git reducer test
  describe("gif", () => {
    it("Fetch Request", () => {
      const state = {
        isFetching: false,
        isError: false,
        gifs: [],
        totalPages: 0,
        error: null
      };

      const newState = gifReducer(state, {
        type: ACTION_TYPES.REQUEST_FETCH_GIFS
      });

      expect(newState).toEqual({
        isFetching: true,
        isError: false,
        gifs: [],
        totalPages: 0,
        error: null
      });
    });

    it("Fetch Success", () => {
      const state = {
        isFetching: false,
        isError: false,
        gifs: [],
        totalPages: 0,
        error: null
      };

      const newState = gifReducer(state, {
        type: ACTION_TYPES.REQUEST_FETCH_GIFS_SUCCESS,
        payload: response_data
      });

      expect(newState).toEqual({
        isFetching: false,
        isError: false,
        gifs: response_data.data,
        totalPages: response_data.pagination.total_count / GIF_COUNT_PER_PAGE,
        error: null
      });
    });

    it("Fetch Failure", () => {
      const state = {
        isFetching: false,
        isError: false,
        gifs: [],
        totalPages: 0,
        error: null
      };

      const newState = gifReducer(state, {
        type: ACTION_TYPES.REQUEST_FETCH_GIFS_FAILURE,
        error: "some error"
      });

      expect(newState).toEqual({
        isFetching: false,
        isError: true,
        gifs: [],
        totalPages: 0,
        error: "some error"
      });
    });
  });
});
