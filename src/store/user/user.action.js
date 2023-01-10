import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTIONS_TYPES } from "./user.types";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user);
};

export const checkUserSession = () =>
  createAction(USER_ACTIONS_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  createAction(USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(USER_ACTIONS_TYPES.SIGN_IN_FAILURE, error);

export const signUpStart = (email, password, displayName) =>
  createAction(USER_ACTIONS_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSucces = (user, additionalDetails) =>
  createAction(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) =>
  createAction(USER_ACTIONS_TYPES.SIGN_UP_FAILED, error);
// export const USER_ACTIONS_TYPES = {
//     SET_CURRENT_USER: "user/SET_CURRENT_USER",
//     CHECK_USER_SESSION: "user/CHECK_USER_SESSION",
//     GOOGLE_SIGN_IN_START: "user/GOOGLE_SIGN_IN_START",
//     EMAIL_SIGN_IN_START: "user/EMAIL_SIGN_IN_START",
//     SIGN_IN_SUCCESS : 'user/SIGN_IN_SUCCESS',
//     SIGN_IN_FAILURE : 'user/SIGN_IN_FAILURE',
//   };
