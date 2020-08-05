import {
  RESET_PC,
  SET_PC_SETTINGS, SET_PC_SHIP_MINUS_COUNT, SET_PC_SHOT_DEAD, SET_PC_SHOT_MISS, SET_SHIP, SET_TEST,
} from "../actions/actionPcTypes";
import {computer} from "../../constants/constants";
import {SET_PC_SHOT} from "../actions/actionPcTypes";


const initialState = computer

const pcReducer = (state= initialState, {type, payload}) => {

  switch (type) {
    case SET_PC_SETTINGS:
      return {...state, ...payload}
    case SET_SHIP:
      return {...state, isShip: [...state.isShip, ...payload ] }
    case SET_PC_SHOT:
      return {...state, ...payload.ships, isHit: {...state.isHit, ...payload.cell}}
    case RESET_PC:
      return {...initialState}
    case SET_PC_SHIP_MINUS_COUNT:
      const count = state.shipCount - 1
      return {...state, shipCount: count}
    case SET_PC_SHOT_DEAD:
      return  {...state, ships: payload.ships, isDead: {...state.isDead, ...payload.cell}}
    case SET_PC_SHOT_MISS:
      return {...state, isMiss: {...state.isMiss, ...payload } }
    case SET_TEST:
      const t = 3
      return {...state, test: 3}
    default:
      return state
  }
}

export default pcReducer