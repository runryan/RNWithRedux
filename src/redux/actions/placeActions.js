// @flow
import { ADD_PLACE, DELETE_PLACE } from "./ActionTypes";
import LogUtils from "../../utils/log/LogUtils";
import { Place } from "../../models/Models";
import type { Action } from "../helper/ReduxFlowType";

export const addPlaceAction = (placeName: string): Action => {
  return {
    type: ADD_PLACE,
    payload: new Place(placeName)
  };
};

export const deletePlaceAction = (place: Place): Action => ({
  type: DELETE_PLACE,
  payload: place
});
