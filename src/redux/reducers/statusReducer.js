import {SET_STATUS} from "../actions/actionTypes";

const initialState = {
  shot: 0,
  hit: 0,
  dead: 0
}
const statusReducer = ( state= initialState, { type, payload } ) => {
  let num = state[payload]
  num++
  switch (type) {
    case SET_STATUS:
      return {
        ...state,
        [payload]: num
      }
    default:
      return state
  }
}

export default statusReducer