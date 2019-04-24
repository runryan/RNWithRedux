// @flow
import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Animated } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";

type State = {
  opacity: Animated.Value
};

type Props = {};

class FadedView extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      opacity: new Animated.Value(0.5)
    };
  }

  startAnimation = () => {
    console.log("开始动画");
    const { opacity } = this.state;
    const animation = Animated.timing(opacity, {
      toValue: 1,
      duration: 3000
    });
    animation.start(() => {
      console.log("动画结束了……");
      this.setState({
        opacity: new Animated.Value(0.5)
      });
    });
  };

  stopAnimation = () => {
    console.log("停止动画");
  };

  render() {
    const { opacity } = this.state;
    console.log("render...", opacity);
    return (
      <View>
        <Animated.View style={{ opacity: opacity, backgroundColor: "#F00" }}>
          <Text style={styles.animatableText}>看我七十二变</Text>
        </Animated.View>
      </View>
    );
  }
}

class AnimationScreen extends Component<{}, State> {
  static navigationOptions = {
    headerTitle: "动画"
  };

  fadeView: ?FadedView;
  constructor() {
    super();
  }

  startAnimation = () => {
    console.log("开始动画", this.fadeView);
    this.fadeView && this.fadeView.startAnimation();
  };

  stopAnimation = () => {
    console.log("停止动画");
  };

  render() {
    return (
      <View style={{ ...globalStyles.screenContainer, ...styles.screen }}>
        <FadedView
          ref={fadeView => {
            this.fadeView = fadeView;
          }}
        />
        <Button title="执行动画" onPress={this.startAnimation} />
      </View>
    );
  }
}

export default AnimationScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center"
  },
  animatableText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
