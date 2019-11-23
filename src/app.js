import React from "react";
import { Provider } from "react-redux";

import Store from './redux/store';

import withNetwork from './libs/withNetwork';

// home page
import Home from "./pages/home";
import axios from "axios";

// styles
import './styles/app.sass';

global.axios = axios.create({
    baseURL: '//api.giphy.com/v1',
});

const App = () => {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
};

export default withNetwork(App);

