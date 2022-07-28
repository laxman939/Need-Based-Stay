import { ActionTypes } from "../Constants/action-types";

import fetchApi from "../../Apis/fetchStay";

const {
  STAY_CLICK,
  FETCH_STAYS,
  ROLE,
  SIGNIN_CLICK,
  SIGNUP_CLICK,
  USERNAME,
  POST_CLICK,
} = ActionTypes;

// To get stays data
export const fetchStays = () => async (dispatch) => {
  const response = await fetchApi.get("/filter"); //Middleware  --> sync to async

  dispatch({
    type: FETCH_STAYS,
    payload: response.data,
  });
};

// To dispaly stays based on stay click type(House or PG)
export const getStayTypeClick = (stayType) => {
  return {
    type: STAY_CLICK,
    payload: stayType,
  };
};

// Role(Owner or User) check to pass data to backend
export function roleCheck(role) {
  return {
    type: ROLE,
    payload: role,
  };
}

// Sign up button click
export function signupClick(status) {
  return {
    type: SIGNUP_CLICK,
    payload: status,
  };
}

// Sign in button Click
export function signinClick(status) {
  return {
    type: SIGNIN_CLICK,
    payload: status,
  };
}

// To display fields based on staytype(Post Property)
export const postClickAction = (status) => {
  return {
    type: POST_CLICK,
    payload: status,
  };
};

// To display in profile page ownername and username
export function getUserName(name) {
  return {
    type: USERNAME,
    payload: name,
  };
}
