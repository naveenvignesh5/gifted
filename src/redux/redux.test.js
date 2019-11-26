import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import gifReducer from "./reducers/gif";
import { fetchGifs } from "./actions/action-gif";

import testData from "./data";
import { ACTION_TYPES } from "./actionTypes";
import { GIF_COUNT_PER_PAGE } from "../constants";

const response_data = testData;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

  describe("action-gif", () => {
    beforeEach(function () {
      moxios.install();
    });
  
    afterEach(function () {
      moxios.uninstall();
    });

    it("creates REQUEST_FETCH_GIFS_SUCCESS after fetching success", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: testData,
        });
      });

      const expectedActions = [
        { type: ACTION_TYPES.REQUEST_FETCH_GIFS },
        { type: ACTION_TYPES.REQUEST_FETCH_GIFS_SUCCESS, payload: testData },
      ];

      const store = mockStore({ gif: {} });

      return store.dispatch(fetchGifs({ q: 'cats', offset: 1 })).then(() => {
        console.log(store.getActions());
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
