// @flow
import type { ReduxState, Action } from "../helper/ReduxFlowType";
import { START_REQUEST, EDN_REQUEST } from "../actions/ActionTypes";
import { ToDo } from "../../models/Models";

type NetworkState = {
  networkState: string,
  data?: ?Array<ToDo>
};

const initialState: NetworkState = {
  networkState: "等待网络请求",
  data: []
};

const networkReducer = (state: NetworkState = initialState, action: Action) => {
  switch (action.type) {
    case START_REQUEST:
      console.log("开始请求网络");

      return Object.assign(
        {},
        state,
        { ...action.payload },
        { networkState: "网络请求中" }
      );
    case EDN_REQUEST:
      console.log("结束网络请求");
      return Object.assign(
        {},
        state,
        { ...action.payload },
        { networkState: "网络请求结束" }
      );
    default:
      console.log("啥都不做请求");
      return state;
  }
};

export default networkReducer;
