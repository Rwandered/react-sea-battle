import {
  RESET_PC, SET_ID,
  SET_PC_SETTINGS,
  SET_PC_SHIP_MINUS_COUNT,
  SET_PC_SHOT,
  SET_PC_SHOT_DEAD,
  SET_PC_SHOT_MISS
} from "./actionPcTypes";
import {isUsedId} from "../../constants/constants";
import {setFollowing} from "./actionCreators";

export const setPcSettings = (pcOptions) => {
  return {
    type: SET_PC_SETTINGS,
    payload: pcOptions
  }
}

export const resetPc = () => {
  return {
    type: RESET_PC
  }
}

export const setPcShot = (ships, cell) => {
  return {
    type: SET_PC_SHOT,
    payload: {
      ships,
      cell
    }
  }
}

export const setPcShipDead = (ships, cell) => {
  return {
    type: SET_PC_SHOT_DEAD,
    payload: {
      ships,
      cell
    }
  }
}

export const setPcShipMinusCount = () => {
  return {
    type: SET_PC_SHIP_MINUS_COUNT,
  }
}

export const setPcShipMiss = (cell) => {
  return {
    type: SET_PC_SHOT_MISS,
    payload: cell
  }
}

export const setId = (id) => {
  return {
    type: SET_ID,
    payload: id
  }
}

export const setTest = () => {
  return {
    type: SET_ID,
  }
}


export const setShip = (ships , shipCount, id) => {

  return (dispatch) => {

  }
}

export const setComputerShot = ( ships ) => {
  // id - генерируется случайным образом
  let id = getRandomId()
  if(isUsedId.includes(id)) {
    return setComputerShot(ships)
  }

  // console.log('SHIPS GEN: ', ships)
  return (dispatch) => {

    isUsedId.push(id)
    const ship = ships.find( ship => ship.location.includes(id)) // нужный объект из массива

    if(ship) {
      // dispatch( setTest() )
      // console.log('ПОПАДАНИЕ')
      const shipIndex = ships.findIndex( ship => ship.location.includes(id)) // нужный индекс объекта из массива
      const partOfShip = ship.location.indexOf(id)
      if(partOfShip >= 0) {
        const hit = [...ship.hit]
        console.log('HITTTTT: ', hit)
        hit[partOfShip] = true
        const newShip = { ...ship, hit}
        console.log('newShip: ', newShip)
        const newShips = [...ships]
        newShips[shipIndex] = newShip
        console.log('newShips: ', newShips)

        dispatch( setPcShot(newShips, {[id]: true}) )

        // console.log('HITTTTT: ', hit)

        if(!hit.includes('')) {
          console.log('УБИТ')
          newShip.dead = true
          console.log('newShip: ', newShip)
          newShips[shipIndex] = newShip
          dispatch( setPcShipDead(newShips, {[id]: true}) )
          dispatch( setPcShipMinusCount() )
        }
      }
      // dispatch( setFollowing('User') ) //по идее тут надо снвоа вызывать этот метод, так как есть попадание
      // setComputerShot(ships)
      return true
    } else {
      // console.log('Мимо')
      dispatch( setPcShipMiss({[id]: true}) )
      dispatch( setFollowing('User') )
      return false
    }
  }
}

const getRandomId = () => Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10)