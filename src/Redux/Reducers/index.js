import { combineReducers } from "redux";

import HouseClickReducer, {
  PgClickReducer,
  fetchStaysReducer,
} from "./StayReducer";
// imported default export and normal export

const reducers = combineReducers({
  stays: fetchStaysReducer,
  House: HouseClickReducer,
  Pg: PgClickReducer,
});

export default reducers;
