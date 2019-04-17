/**
 * @format
 * @flow
 */
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store/configureStore";
import type { ReduxState } from "../src/redux/helper/ReduxFlowType";
import { ADD_PLACE, DELETE_PLACE } from "../src/redux/actions/ActionTypes";

import MainScreen from "./screens/MainScreen";

class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}
export default App;
