/**
 * @format
 * @flow
 */
import React, { Component } from "react";
import { Provider } from "react-redux";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import store from "../src/redux/store/configureStore";
import type { ReduxState } from "../src/redux/helper/ReduxFlowType";
import { ADD_PLACE, DELETE_PLACE } from "../src/redux/actions/ActionTypes";

import MainStack from "../src/screens/MainStack";
import { globalStyles } from "../src/styles/GlobalStyles";

type State = {
  isDataReady: boolean
};

class App extends Component<{}, State> {
  constructor() {
    super();
    this.state = {
      isDataReady: false
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      console.log("跳转页面");
      this.setState({
        isDataReady: true
      });
    }, 2000);
  };

  render() {
    const { isDataReady } = this.state;
    return isDataReady ? (
      <Provider store={store}>
        <MainStack />
      </Provider>
    ) : (
      <View style={[globalStyles.screenContainer, styles.screenContainer]}>
        <ActivityIndicator color="#F00" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
