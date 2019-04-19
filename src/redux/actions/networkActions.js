// @flow
import type { Action } from "../helper/ReduxFlowType";
import { START_REQUEST, EDN_REQUEST } from "../actions/ActionTypes";

export const startRequest = (): Action => {
  return { type: START_REQUEST };
};

export const endRequest = (payload: any): Action => {
  return { type: EDN_REQUEST, payload: payload };
};

export const requestAsync = () => {
  console.log("发起请求……");
  // $flow-disable-line
  return (dispatch, getState) => {
    dispatch(startRequest());
    console.log("网络请求执行了？？？");
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        console.log("请求结果：", response);
        return {
          statusCode: response.status,
          data: response.json()
        };
      })
      .then(result => {
        console.log("请求结果 - dispatch :", result);
        return dispatch(endRequest(result));
      })
      .catch(error => {
        console.log("请求结果 - error :", error);
        return dispatch(endRequest({ statusCode: -1, data: {} }));
      });
  };
};
