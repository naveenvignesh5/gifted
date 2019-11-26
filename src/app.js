import React from "react";
import { Provider } from "react-redux";

import Store from './redux/store';

import withNetwork from './libs/withNetwork';

// home page
import Home from "./pages/home";

// styles
import './styles/app.sass';

const App = () => {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
};

export default withNetwork(App);

