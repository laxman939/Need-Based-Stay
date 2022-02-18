import { ActionTypes } from "../Constants/action-types";

import fetchApi from "../../Apis/fetchStay";

const {
  HOUSE_CLICK,
  PG_CLICK,
  FETCH_STAYS,
  ROLE,
  SIGNIN_CLICK,
  SIGNUP_CLICK,
  USER_NAME,
  OWNER_NAME,
} = ActionTypes;

export const fetchStays = () => async (dispatch) => {
  const response = await fetchApi.get("/filter"); //Middleware  --> sync to async

  dispatch({
    type: FETCH_STAYS,
    payload: response.data,
  });
};

export const houseClickAction = (status) => {
  return {
    type: HOUSE_CLICK,
    payload: status,
  };
};
export function pgClickAction(status) {
  return {
    type: PG_CLICK,
    payload: status,
  };
}

export function RoleCheck(role) {
  return {
    type: ROLE,
    payload: role,
  };
}
export function SignupClick(status) {
  return {
    type: SIGNUP_CLICK,
    payload: status,
  };
}
export function SigninClick(status) {
  return {
    type: SIGNIN_CLICK,
    payload: status,
  };
}
export function getOwnerName(name) {
  return {
    type: OWNER_NAME,
    payload: name,
  };
}
export function getUserName(name) {
  return {
    type: USER_NAME,
    payload: name,
  };
}

// export const UserSignup = (userData) => {
//   return {
//     type: SIGNUP_USER_VALUES,
//     payload: userData,
//   };
// };
