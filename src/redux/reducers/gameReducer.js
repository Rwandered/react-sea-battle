import {RESET_GAME, SET_GAME, SET_SHIP_DEAD, SET_SHOT, SET_SHOT_MINUS_COUNT} from "../actions/actionTypes";
import {game} from "../../constants/constants";

const initialState = game
const gameReducer = (state= initialState, {type, payload}) => {
   switch (type) {
    case SET_GAME:
      return {...state, ...payload}
    case SET_SHOT:
      return { ...state, ships: payload }
    case SET_SHOT_MINUS_COUNT:
      const count = state.shipCount - 1
      return {...state, shipCount: count}
    case SET_SHIP_DEAD:
      return { ...state, ships: payload }
     case RESET_GAME:
       return {...initialState}
    default:
      return state
  }
}

export default gameReducer