// @flow
import React, { Component } from "react";
import { View, Text, Platform, StatusBar, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Header } from "react-navigation";
import type { TransitionConfig } from "react-navigation";
import type { NavigationSceneRendererProps } from "react-navigation";
import type { NavigationTransitionProps } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";

import { StackViewTransitionConfigs } from "react-navigation-stack";

import MainScreen from "./MainScreen";
import NetworkScreen from "./NetworkScreen";
import AddPlaceScreen from "./AddPlaceScreen";
import AnimationScreen from "./AnimationScreen";

const styles = StyleSheet.create({
  header: {
    height: Header.HEIGHT + StatusBar.currentHeight * 2,
    width: "100%",
    backgroundColor: "#F00"
  }
});

const transitionConfig: TransitionConfig = (
  transitionProps,
  prevTransitionProps,
  isModal
) => {
  return {
    transitionSpec: {},
    screenInterpolator: (props: NavigationSceneRendererProps) => {},
    containerStyle: {
      paddingTop: -24
    }
  };
};

const GradientBackground = props => (
  <LinearGradient
    colors={["#FFD801", "#FF8040"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    {...props}
  />
);

const AppNavigator = createStackNavigator(
  {
    MainScreen: { screen: MainScreen },
    AddPlaceScreen: { screen: AddPlaceScreen },
    NetworkScreen: { screen: NetworkScreen },
    AnimationScreen: { screen: AnimationScreen }
  },
  {
    headerBackTitleVisible: false,
    initialRouteName: "MainScreen",
    defaultNavigationOptions: {
      headerTintColor: "#FFF",
      header: props => {
        console.log("设置Header:", props);
        return (
          <View style={styles.header}>
            <GradientBackground
              style={{ height: StatusBar.currentHeight * 2 }}
            />
            <GradientBackground style={{ height: Header.HEIGHT }}>
              <Header {...props} />
            </GradientBackground>
          </View>
        );
      },
      headerStyle: {
        backgroundColor: "transparent"
      }
      // headerMode: "float"
    },
    headerLayoutPreset: "center",
    transitionConfig: (transitionProps, prevTransitionProps, isModal) => {
      const defaultConfig = StackViewTransitionConfigs.defaultTransitionConfig(
        transitionProps,
        prevTransitionProps,
        isModal
      );
      const statusBarHeight = StatusBar.currentHeight;
      return {
        ...defaultConfig,
        containerStyle: {
          ...defaultConfig.containerStyle,
          marginTop: Platform.OS === "android" ? -statusBarHeight : 0
        }
      };
    }
  }
);

const MainStack = createAppContainer(AppNavigator);

export default MainStack;
