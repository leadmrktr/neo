import {combineReducers} from "redux";
import login from "./login";
import user from './user'

const appReducer = combineReducers({
  login,
  user
});

export default appReducer;
