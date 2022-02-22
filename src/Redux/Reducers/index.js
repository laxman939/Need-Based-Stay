import { combineReducers } from "redux";

import HouseClickReducer, {
  PgClickReducer,
  fetchStaysReducer,
  RoleReducer,
  OwnerNameReducer,
  UserNameReducer,
  PostClickReducer,
} from "./StayReducer";
// imported default export and normal export

const reducers = combineReducers({
  Stays: fetchStaysReducer,
  House: HouseClickReducer,
  Pg: PgClickReducer,
  Role: RoleReducer,
  Owner: OwnerNameReducer,
  User: UserNameReducer,
  PostClick: PostClickReducer,
});

export default reducers;
