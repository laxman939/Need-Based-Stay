import { ActionTypes } from "../Constants/action-types";

const {
  HOUSE_CLICK,
  PG_CLICK,
  FETCH_STAYS,
  ROLE,
  OWNER_NAME,
  USER_NAME,
  POST_CLICK,
} = ActionTypes;

export let initialState = {
  stays: [],
  houseClick: false,
  pgClick: false,
  role: "",
  owner: "",
  user: "",
  signup: false,
  signin: false,
  postClick: "",
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

export function RoleReducer(state = initialState, action) {
  switch (action.type) {
    case ROLE:
      return {
        ...state,
        role: action.payload,
      };

    default:
      return state;
  }
}
export function OwnerNameReducer(state = initialState, action) {
  switch (action.type) {
    case OWNER_NAME:
      return {
        ...state,
        owner: action.payload,
      };

    default:
      return state;
  }
}
export function UserNameReducer(state = initialState, action) {
  switch (action.type) {
    case USER_NAME:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export function PostClickReducer(state = initialState, action) {
  switch (action.type) {
    case POST_CLICK:
      return {
        ...state,
        postClick: action.payload,
      };

    default:
      return state;
  }
}
