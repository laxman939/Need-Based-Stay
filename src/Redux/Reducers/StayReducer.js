import { ActionTypes } from "../Constants/action-types";

const {
  FETCH_STAYS,
  STAY_CLICK,
  ROLE,
  POST_CLICK,
  SIGNUP_CLICK,
  SIGNIN_CLICK,
  OWNER_NAME,
  USER_NAME,
} = ActionTypes;

export let initialState = {
  stays: [],
  stayClick: "",
  role: "",
  signup: false,
  signin: false,
  postClick: "",
  owner: "",
  user: "",
};

// To store fetched data
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

// To store stayType (House or PG)
export default function StayClickReducer(state = initialState, action) {
  switch (action.type) {
    case STAY_CLICK:
      return {
        ...state,
        stayClick: action.payload,
      };

    default:
      return state;
  }
}

// To store Role (Owner or User)
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

// To store signup click (true/false)
export function SignupClickReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_CLICK:
      return {
        ...state,
        signup: action.payload,
      };

    default:
      return state;
  }
}

// To store signin click (true/false)
export function SigninClickReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_CLICK:
      return {
        ...state,
        signin: action.payload,
      };

    default:
      return state;
  }
}

// To store staytype House or PG(Post Property)
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

// To store owner name and user name
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
