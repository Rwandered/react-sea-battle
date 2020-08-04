import {combineReducers} from "redux";
import authReducer from "./authReducer";
import statusReducer from "./statusReducer";
import headerReducer from "./headerReducer";
import gameReducer from "./gameReducer";
import pcReducer from "./pcReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  status: statusReducer,
  header: headerReducer,
  game: gameReducer,
  computer: pcReducer
})

export default rootReducer