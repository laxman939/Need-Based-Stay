import { combineReducers } from "redux";

import StayClickReducer, {
  fetchStaysReducer,
  RoleReducer,
  OwnerNameReducer,
  UserNameReducer,
  PostClickReducer,
} from "./StayReducer";
// imported default export and normal export

const reducers = combineReducers({
  Stays: fetchStaysReducer,
  StayClick: StayClickReducer,
  Role: RoleReducer,
  Owner: OwnerNameReducer,
  User: UserNameReducer,
  PostClick: PostClickReducer,
});

export default reducers;
