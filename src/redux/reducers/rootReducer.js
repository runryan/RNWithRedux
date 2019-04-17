// @flow
import { placeReducer } from "./placeReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  placeState: placeReducer
});

export default rootReducer;
