import {combineReducers} from "redux";
import login from "./login";

const appReducer = combineReducers({
  login
});

const rootReducer = (state, action) => {
	// clearing state on logout
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
