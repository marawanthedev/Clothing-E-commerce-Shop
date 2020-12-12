// gets 2 props prev state and action
import {UserActionTypes} from "./user.types"
{
  // type:
  // payload:
}
// once the app starts redux wont be able to keep track of states
// so we need to provide it with inital state

const INITIAL_STATE = {
  currentUser: null,
};

// giving it a default value in case if it wasnt passed by other component
// this only happens when value is undefined nnot null
const userReducer = (state = INITIAL_STATE, action) => {
  // **state is being passed by redux it self
  // when the action gets fired
  // every single reducer gets every action that is being fired
  // reducers dont know if the action is relevant to it or not
  // and that happens using the swtich
  // this is why we need a default statement as if it didnt match any case
  // we will just return the state as it was
  // **keep in mind each time the action is fired, redux passes the current state
  // **which means that in case of not matching any cases we are returning the prev state that was passed by redux it self

  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        //   **creating a new object which gets populated by a spread of the state which contains the prev state object including the current user but we are overwriting it and the reason it works bcs there is an actual new object creation in which we are modifying the data at, we are not modifiying an existing prop object we are creating a new object and then modify it before passing it so the components can re-render
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
