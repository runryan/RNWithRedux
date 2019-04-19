// @flow
// @format
import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { globalStyles, dividerColor } from "../styles/GlobalStyles";
import { isEmpty } from "../utils/extension/StringExtension";
import type { ReduxState } from "../redux/helper/ReduxFlowType";
import {
  addPlaceAction,
  deletePlaceAction
} from "../redux/actions/placeActions";
import { Place } from "../models/Models";
import LogUtils from "../utils/log/LogUtils";

type Props = {
  placeList: Array<Place>,
  addPlace: (placeName: string) => void,
  deletePlace: (place: Place) => void
};

/**
 * 程序主页
 * @export AddPlaceScreen
 * @class AddPlaceScreen
 * @extends {Component}
 */
class AddPlaceScreen extends Component<Props> {
  static navigationOptions = {
    headerTitle: "Redux简单Demo"
  };

  constructor(props: Props) {
    super(props);
  }

  inputPlaceName = "";

  // MARK: 添加地址
  didAddPlace = () => {
    if (isEmpty(this.inputPlaceName)) {
      LogUtils.warn("请输入地址");
      return;
    }
    const { addPlace } = this.props;
    addPlace(this.inputPlaceName);
    this.setState({});
    LogUtils.log(`添加地址${this.inputPlaceName}`);
  };

  // MARK: 删除地址
  didDeletePlace = (place: Place) => {
    const { deletePlace } = this.props;
    deletePlace(place);
    this.setState({});
  };

  // MARK: 添加地址输入框和确认按钮
  AddPlaceView = () => (
    <View style={styles.addPlaceView}>
      <TextInput
        style={styles.textInput}
        placeholder="请输入地址"
        onChangeText={text => {
          this.inputPlaceName = text;
        }}
      />
      <Button title="添加" onPress={this.didAddPlace} />
    </View>
  );

  // MARK: 地址单元格
  PlaceCell = ({ item, index }: { item: Place, index: number }) => (
    <View style={styles.placeCell}>
      <Text style={styles.placeCellText}>{`第${index}行 ${item.name}`}</Text>
      <Button
        title="移除"
        onPress={() => {
          this.didDeletePlace(item);
        }}
      />
    </View>
  );

  render() {
    const { placeList } = this.props || {};
    LogUtils.log("placeList -> ", placeList);
    return (
      <View style={globalStyles.screenContainer}>
        {this.AddPlaceView()}
        <FlatList
          style={{ flex: 1 }}
          data={placeList || []}
          renderItem={this.PlaceCell}
          keyExtractor={(item: Place, index: number) => {
            LogUtils.log("keyExtractor : ", `${index}`);
            return `${index}`;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addPlaceView: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 88
  },
  textInput: {
    backgroundColor: "#FFF",
    paddingLeft: 8,
    paddingRight: 8,
    height: 50,
    borderWidth: 1,
    borderColor: dividerColor
  },
  placeCell: {
    backgroundColor: "#F1F1F1",
    marginTop: 4,
    padding: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  placeCellText: {
    flex: 1
  }
});

const mapStateToProps = (state: Object, ownProps?) => {
  LogUtils.log("mapStateToProps -> ", state);
  return {
    placeList: state.placeState.placeList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPlace: (placeName: string) => {
      dispatch(addPlaceAction(placeName));
    },
    deletePlace: (place: Place) => {
      dispatch(deletePlaceAction(place));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPlaceScreen);
