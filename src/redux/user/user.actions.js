import { UserActionTypes } from "./user.types";
export const setCurrentUser = (user) => ({
  // **returning action object
  type: UserActionTypes.SET_CURRENT_USER,
  // this fires the reducer
  // user has gotta be an object
  payload: user,
  // payload is the data
});
