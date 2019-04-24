// @flow
// @format
import React, { Component } from "react";
import { Button, TextInput, StyleSheet, StatusBar } from "react-native";
import { View, Text, FlatList, ToolbarAndroid } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";

import LogUtils from "../utils/log/LogUtils";
import { globalStyles, dividerColor } from "../styles/GlobalStyles";

type Props = {
  navigation: NavigationScreenProp<NavigationState>
};

/**
 * 程序主页
 * @export MainScreen
 * @class MainScreen
 * @extends {Component}
 */
export default class MainScreen extends Component<Props> {
  static navigationOptions = {
    headerTitle: "主页"
  };

  constructor(props: Props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={[globalStyles.screenContainer, styles.screenContainer]}>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor="#FF00"
        />
        <View style={styles.statusBarBackgroundView} />
        <View>
          <Button
            title="添加地址(Redux)"
            onPress={() => {
              const { navigation } = this.props;
              navigation.navigate("AddPlaceScreen");
            }}
          />
          <Button
            title="网络请求（Redux-thunk）"
            onPress={() => {
              navigation.navigate("NetworkScreen");
            }}
          />
          <Button
            title="动画演示"
            onPress={() => {
              navigation.navigate("AnimationScreen");
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  statusBarBackgroundView: {
    width: "100%",
    position: "absolute",
    backgroundColor: "#F00",
    height: StatusBar.currentHeight
  }
});
