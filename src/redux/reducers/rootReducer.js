import {combineReducers} from "redux";
import authReducer from "./authReducer";
import statusReducer from "./statusReducer";
import headerReducer from "./headerReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  status: statusReducer,
  header: headerReducer
})

export default rootReducer