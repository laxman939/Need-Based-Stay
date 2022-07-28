import { combineReducers } from "redux";

import StayClickReducer, {
  fetchStaysReducer,
  RoleReducer,
  OwnerNameReducer,
  UserNameReducer,
  PostClickReducer,
  SignupClickReducer,
} from "./StayReducer";
// imported default export and normal export

const reducers = combineReducers({
  Stays: fetchStaysReducer,
  StayClick: StayClickReducer,
  Role: RoleReducer,
  UserName: UserNameReducer,
  PostClick: PostClickReducer,
  Signup: SignupClickReducer,
  Signin: SignupClickReducer,
});

export default reducers;
