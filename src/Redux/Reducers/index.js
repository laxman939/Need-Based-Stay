import { combineReducers } from "redux";

import HouseClickReducer, {
  PgClickReducer,
  fetchStaysReducer,
  RoleReducer,
} from "./StayReducer";
// imported default export and normal export

const reducers = combineReducers({
  Stays: fetchStaysReducer,
  House: HouseClickReducer,
  Pg: PgClickReducer,
  Role: RoleReducer,
});

export default reducers;
