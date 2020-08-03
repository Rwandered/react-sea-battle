import {
  CHANGE_HEADER,
  SET_AUTH,
  SET_OPPONENT,
  SET_STATUS,
  SET_USER
} from "./actionTypes";


export const setUserName = (userName) => {
  return {
    type: SET_USER,
    payload: userName
  }
}

export const setOpponentName = (pcName) => {
  return {
    type: SET_OPPONENT,
    payload: pcName
  }
}

export const setAuth = ({ userName, pcName }) => {
  return {
    type: SET_AUTH,
    payload: {
      userName,
      pcName
    }
  }
}

export const setStatus = (statusType) => {

  return {
    type: SET_STATUS,
    payload: statusType
  }
}

export const changeHeader = (title) => {

  return {
    type: CHANGE_HEADER,
    payload: title
  }
}