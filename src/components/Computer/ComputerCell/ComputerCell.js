import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeHeader, setLostStatus} from "../../../redux/actions/actionCreators";
import cn from "classnames";
import s from '../../Cell/Cell.module.scss'
import {setShipOptions} from "../../../redux/actions/actionCreatorsPC";


const ComputerCell = ( { cellId }) => {

  const dispatch = useDispatch()
  const { ships, shipCount, isShip: shipEx } = useSelector(state => state.computer)

  // const isHit = useSelector( state => {
  //   const hit = state.computer.isHit
  //   if(cellId in hit) {
  //     return true
  //   }
  // })

  const isMiss = useSelector( state => {
    const miss = state.computer.isMiss
    return cellId in miss
  })


  const isHit = useSelector( state => {
    const { ships } = state.computer
    const ship = ships.find( ship => ship.location.includes(cellId))
    if (ship) {
      const partOfShip = ship.location.indexOf(cellId)
      return ship.hit[partOfShip]
    }
  })

  const isDead = useSelector( state => {
    const { ships } = state.computer
    const ship = ships.find( ship => ship.location.includes(cellId))
    return ship && ship.dead
  })

  // const isDead = useSelector( state => {
  //   const { ships } = state.computer
  //   const dead = state.computer.isDead
  //   const ship = ships.find( ship => ship.location.includes(cellId))
  //   if(ship) {
  //     if(cellId in dead) {
  //       return ship.dead
  //     }
  //   }
  // })

  const isShip = useSelector( state => {
    const {isShip, isDead, isHit} = state.computer
    if(cellId in isHit) {
      return false
    } else if (cellId in isDead) {
      return false
    }

    return isShip.includes(cellId)
  })


  useEffect(() => {
    if(ships.length > 0) {
      dispatch( setShipOptions(ships, shipEx) ) //который бы определил является ли ячейка частью кораблика
    }
  }, [])

  useEffect( () => {
    if(shipCount === 0) {
      dispatch( setLostStatus() ) // установим для игрока lost status
      dispatch(changeHeader('You lost!')) // сменим состояние header компонента при проигрыше игрока
    }
  }, [shipCount])


  return (
    <td
      className={ cn(
        { [s.cell_miss]: isMiss },
        { [s.cell_hit]: isHit },
        { [s.cell_dead]: isDead },
        { [s.cell_ship]: isShip },
      )}
      data-id={cellId}
    />
  )
}

export default ComputerCell