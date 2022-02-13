import { ActionTypes } from "../Constants/action-types";

const { HOUSE_CLICK, PG_CLICK, FETCH_STAYS } = ActionTypes;

let initialState = {
  stays: [],
  houseClick: false,
  pgClick: false,
};

export function fetchStaysReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STAYS:
      return {
        ...state,
        stays: action.payload,
      };

    default:
      return state;
  }
}

export default function HouseClickReducer(state = initialState, action) {
  switch (action.type) {
    case HOUSE_CLICK:
      return {
        ...state,
        houseClick: action.payload,
      };

    default:
      return state;
  }
}

export function PgClickReducer(state = initialState, action) {
  switch (action.type) {
    case PG_CLICK:
      return {
        ...state,
        pgClick: action.payload,
      };

    default:
      return state;
  }
}
