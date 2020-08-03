import {combineReducers} from "redux";
import authReducer from "./authReducer";
import statusReducer from "./statusReducer";
import headerReducer from "./headerReducer";
import shotReducer from "./gameReducer";
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  status: statusReducer,
  header: headerReducer,
  game:gameReducer,
})

export default rootReducer