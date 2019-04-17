// @flow
import { ADD_PLACE, DELETE_PLACE } from "../actions/ActionTypes";
import type { Action, ReduxState } from "../helper/ReduxFlowType";
import type { Place } from "../../models/Models";
import { removeItemFromArray } from "../../utils/extension/ArrayExtension";
import { addPlaceAction, deletePlaceAction } from "../actions/placeActions";
import LogUtils from "../../utils/log/LogUtils";

const initialState: ReduxState = {
  placeList: []
};

export const placeReducer = (
  state: ReduxState = initialState,
  action: Action
): ReduxState => {
  const { placeList } = state;
  switch (action.type) {
    case ADD_PLACE:
      const addedPlace = (action.payload: Place);
      placeList.push(addedPlace);
      return Object.assign({}, state, { placeList: placeList });

    case DELETE_PLACE:
      const removedPlace = (action.payload: Place);
      const newPlaceList = removeItemFromArray(placeList, removedPlace);
      return Object.assign({}, state, { placeList: newPlaceList });

    default:
      return state;
  }
};
