import {
  CHANGE_HEADER,
  SET_AUTH, SET_GAME,
  SET_OPPONENT, SET_SHOT, SET_SHOT_MINUS_COUNT,
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

export const setShot = (ships) => {
  return {
    type: SET_SHOT,
    payload: ships
  }
}

export const setShotMinusCount = () => {
  return {
    type: SET_SHOT_MINUS_COUNT,
  }
}

export const setShipDead = (ships) => {
  return {
    type: SET_SHOT,
    payload: ships
  }
}

export const setGame = (gameOptions) => {
  return {
    type: SET_GAME,
    payload: gameOptions
  }
}


export const setHit = ( ships , shipCount, id ) => {

  return (dispatch) => {
    const ship = ships.find( ship => ship.location.includes(id)) // нужный объект из массива
    const shipIndex = ships.findIndex( ship => ship.location.includes(id)) // нужный индекс объекта из массива

    if(ship) {
      const partOfShip = ship.location.indexOf(id)

      if(partOfShip >= 0) {

        const hit = [...ship.hit]
        hit[partOfShip] = true
        const newShip = { ...ship, hit}
        const newShips = [...ships]
        newShips[shipIndex] = newShip

        dispatch( setShot(newShips) )
        dispatch( setStatus('hit') )

        if(!hit.includes('')) {

          newShip.dead = true
          newShips[shipIndex] = newShip
          dispatch( setShipDead(newShips) )
          dispatch( setStatus('dead'))
          dispatch( setShotMinusCount() )
        }
      }
    }
  }
}