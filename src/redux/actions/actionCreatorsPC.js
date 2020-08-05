import {
  RESET_PC, SET_ID,
  SET_PC_SETTINGS,
  SET_PC_SHIP_MINUS_COUNT,
  SET_PC_SHOT,
  SET_PC_SHOT_DEAD,
  SET_PC_SHOT_MISS, SET_SHIP
} from "./actionPcTypes";
import {isUsedId} from "../../constants/constants";
import {setBlock, setFollowing} from "./actionCreators";

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


export const setShip = (ships) => {
  return {
    type: SET_SHIP,
    payload: ships
  }
}

export const setShipOptions = (ships, shipsEx) => {
  // console.log('МАССИВ ЯЧЕЕК КОТОРЫЕ ДОЛЖНЫ БЫТЬ КОРАБЛИКАМИ: ', shipsEx)

  return (dispatch) => {
    if(ships.length > 0) {
      if(shipsEx.length === 0) {
        let shipCells = []
        const newShips = [...ships]
        newShips.forEach( (ship) => {
          ship.location.forEach( coordinate => {
            shipCells.push(coordinate)
          })
        })
        dispatch( setShip(shipCells) )
      }
    }
  }
}


export const setComputerShot = ( ships ) => {
  // id - генерируется случайным образом
  let id = getRandomId()
  if(isUsedId.includes(id)) {
    return setComputerShot(ships)
  }

  return (dispatch) => {

    // console.log('ПЕРЕДАННЫЕ КОРАБЛИ ДЛЯ ФОРМИРОВАНИЯ ВЫСТРЕЛОВ НА ПОЛЕ ПК: ', ships)

    isUsedId.push(id)
    // console.log('ВЫБРАННАЯ ЯЧЕЙКА КОМПЬЮТЕРОМ: ', id)
    const ship = ships.find( ship => ship.location.includes(id)) // нужный объект из массива кораблей, где есть наш
    // случайный элемент - по которому будет стрелять пк
    // если такой корабль есть то услвоие ниже, если нет - то блок else и состояни в isMiss

    if(ship) {
      // console.warn('КОМПЬЮТЕР ПОПАЛ')

      const shipIndex = ships.findIndex( ship => ship.location.includes(id)) // нужный индекс объекта из массива
      const partOfShip = ship.location.indexOf(id)
      if(partOfShip >= 0) {
        const hit = [...ship.hit]
        // console.log('HITTTTT: ', hit)
        hit[partOfShip] = true
        const newShip = { ...ship, hit}
        // console.log('newShip: ', newShip)
        const newShips = [...ships]
        newShips[shipIndex] = newShip
        // console.log('newShips: ', newShips)

        dispatch( setPcShot(newShips, {[id]: true}) )

        // console.log('HITTTTT: ', hit)

        if(!hit.includes('')) {
          // console.log('КОМПЬЮТЕР УБИЛ')
          newShip.dead = true
          console.log('newShip: ', newShip)
          newShips[shipIndex] = newShip
          dispatch( setPcShipDead(newShips, {[id]: true}) )
          dispatch( setPcShipMinusCount() )
        }
      }
      return true
    } else {
      // console.log('КОМПЬЮТЕР МИМО')
      dispatch( setPcShipMiss({[id]: true}) ) // если пк не попал - меняем состояние на isMiss
      dispatch( setFollowing('User') ) // передаем ход пользователю
      dispatch( setBlock() ) //  также разрешаем ход пользователю
      return false
    }
  }
}

const getRandomId = () => Math.floor(Math.random() * 10) + '' + Math.floor(Math.random() * 10)