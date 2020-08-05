import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeHeader} from "../../../redux/actions/actionCreators";
import cn from "classnames";
import s from '../../Cell/Cell.module.scss'
import {setComputerShot, setShipOptions} from "../../../redux/actions/actionCreatorsPC";


const ComputerCell = ( { cellId }) => {

  const dispatch = useDispatch()
  const { ships, shipCount, isShip: shipEx } = useSelector(state => state.computer)

  const isHit = useSelector( state => {
    const hit = state.computer.isHit
    if(cellId in hit) {
      return true
    }
  })

  const isDead = useSelector( state => {
    const { ships } = state.computer
    const dead = state.computer.isDead
    const ship = ships.find( ship => ship.location.includes(cellId))
    if(ship) {
      if(cellId in dead) {
        return ship.dead
      }
    }
  })

  const isMiss = useSelector( state => {
    const miss = state.computer.isMiss
    return cellId in miss
  })

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
    if(shipCount === 0) {
      dispatch(changeHeader('You lost!')) // сменим состояние header компонента при проигрыше игрока
    }
    if(ships.length > 0) {
      dispatch( setShipOptions(ships, shipEx) ) //который бы определил является ли ячейка частью кораблика
    }
  }, [])


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