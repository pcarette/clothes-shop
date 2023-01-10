import { USER_ACTIONS_TYPES } from "./user.types";

const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error : null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser : payload }
    case USER_ACTIONS_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_ACTIONS_TYPES.SIGN_IN_FAILED:
      return { ...state, error : payload }
    default:
      return state;
  }
};
