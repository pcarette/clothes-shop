import { USER_ACTIONS_TYPES } from "./user.types";

const USER_INITIAL_STATE = {currentUser : null}

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    case "increment":
      
    default:
      return state;
  }
};
