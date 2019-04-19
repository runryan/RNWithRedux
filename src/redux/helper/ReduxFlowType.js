// @flow
import { Place } from "../../models/Models";
export type Action = {
  type: string,
  payload?: any
};

export type ReduxState = {
  placeList: Array<Place>
};
