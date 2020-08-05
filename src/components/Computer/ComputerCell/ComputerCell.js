import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeHeader} from "../../../redux/actions/actionCreators";
import cn from "classnames";
import s from '../../Cell/Cell.module.scss'
import {setShipOptions} from "../../../redux/actions/actionCreatorsPC";


const ComputerCell = ( { cellId }) => {


  const { ships, shipCount, isShip: shipEx } = useSelector(state => state.computer)
  const dispatch = useDispatch()


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
    const ship = state.computer.isShip
    return ship.includes(cellId)
  })


  useEffect(() => {
    if(shipCount === 0) {
      dispatch(changeHeader('You lost!'))
    }
  }, [])

  useEffect(() => {
    // тут надо вызвать метод в актион креатор , который бы определил является ли ячейка частью кораблика
    ships && dispatch( setShipOptions(ships, shipEx))
  }, [])


  return (
    <td
      className={ cn(
        { [s.cell_ship]: isShip },
        { [s.cell_miss]: isMiss },
        { [s.cell_hit]: isHit },
        { [s.cell_dead]: isDead },
      )}
      data-id={cellId}l
    />
  )
}

export default ComputerCell