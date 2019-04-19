// @flow
import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import MainScreen from "./MainScreen";
import NetworkScreen from "./NetworkScreen";
import AddPlaceScreen from "./AddPlaceScreen";

const AppNavigator = createStackNavigator({
  MainScreen: { screen: MainScreen },
  AddPlaceScreen: { screen: AddPlaceScreen },
  NetworkScreen: { screen: NetworkScreen }
});

export default createAppContainer(AppNavigator);
