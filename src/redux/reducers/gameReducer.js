import {SET_GAME, SET_SHIP_DEAD, SET_SHOT, SET_SHOT_MINUS_COUNT} from "../actions/actionTypes";
import { game } from "../../utils/game";

const gameReducer = (state= game, {type, payload}) => {
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
    default:
      return state
  }
}

export default gameReducer