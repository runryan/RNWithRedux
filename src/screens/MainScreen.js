// @flow
// @format
import React, { Component } from "react";
import { Button, TextInput, StyleSheet } from "react-native";
import { View, Text, FlatList } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";

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
    return (
      <View style={[globalStyles.screenContainer, styles.screenContainer]}>
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
              const { navigation } = this.props;
              navigation.navigate("NetworkScreen");
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center"
  }
});
