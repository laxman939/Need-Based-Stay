import { ActionTypes } from "../Constants/action-types";

import fetchApi from "../../Apis/fetchStay";

const { HOUSE_CLICK, PG_CLICK, FETCH_STAYS } = ActionTypes;

export const fetchStays = () => async (dispatch) => {
  const response = await fetchApi.get("/"); //Middleware  --> sync to async

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
