// @flow
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { globalStyles } from "../styles/GlobalStyles";
import LogUtils from "../utils/log/LogUtils";
import { requestAsync } from "../redux/actions/networkActions";
import { ToDo } from "../models/Models";

type Props = {
  requestAsync: () => void,
  networkState: string,
  data?: Array<ToDo>
};

class NetworkScreen extends Component<Props> {
  static navigationOptions = {
    headerTitle: "Redux异步Action"
  };

  constructor(props: Props) {
    super(props);
  }

  request = () => {
    const { requestAsync } = this.props;
    requestAsync();
  };

  render() {
    const { networkState, data } = this.props;
    return (
      <View style={globalStyles.screenContainer}>
        <Text style={styles.text}>{networkState || "未知"}</Text>
        <Button onPress={this.request} title="发起网络请求" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    textAlign: "center",
    height: 50,
    lineHeight: 50
  }
});

const mapStateToProps = (state: Object, ownProps?) => {
  LogUtils.log("mapStateToProps -> ", state);
  return {
    ...(state.networkState || {})
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAsync: () => {
      dispatch(requestAsync());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NetworkScreen);
