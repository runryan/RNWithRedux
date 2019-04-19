// @flow
import { combineReducers } from "redux";
import { placeReducer } from "./placeReducers";
import networkReducer from "../reducers/networkReducer";

const rootReducer = combineReducers({
  placeState: placeReducer,
  networkState: networkReducer
});

export default rootReducer;
