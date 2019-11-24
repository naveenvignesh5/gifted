import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

// page
import Home from "./home";

// actions
import { fetchGifs } from "../../redux/actions/action-gif";

const mockStore = configureStore([]);

describe("Home", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      gif: {
        isFetching: false,
        isError: false,
        gifs: [],
        totalPages: 0,
        error: null
      }
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it("snapshot renders with given state in redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

//   it("snapshot renders when dispatch fetchGifs", () => {
//     renderer.act(() => {
//         console.log(component.root.children);
//         component.root.props.fetchGifs({ q: 'cats', offset: 1 });
//     });

//     expect(store.dispatch).toHaveBeenCalledTimes(1);
//     expect(store.dispatch).toHaveBeenCalledWith(
//         fetchGifs({ q: 'cats', offset: 1 })
//     );
//   });
});
