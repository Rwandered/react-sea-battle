import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeHeader} from "../../../redux/actions/actionCreators";
import cn from "classnames";
import s from '../../Cell/Cell.module.scss'

const ComputerCell = ( { cellId }) => {

  // console.log('ComputerCell')

  const { ship, shipCount, isShip } = useSelector(state => state.computer)
  const dispatch = useDispatch()

  const isHit = useSelector( state => {
    const { ships } = state.computer
    const hit = state.computer.isHit
    if(cellId in hit) {
      // const ship = ships.find( ship => ship.location.includes(cellId))
      // if (ship) {
      //   const partOfShip = ship.location.indexOf(cellId)
      //   return ship.hit[partOfShip]

      // }
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


  useEffect(() => {
    if(shipCount === 0) {
      dispatch(changeHeader('You lost!'))
    }
  }, [shipCount])

  // useEffect(() => {
  //   // тут надо вызвать метод в актион креатор , который бы определил является ли ячейка частью кораблика
  // }, [ship])


  return (
    <td
      className={ cn(
        { [s.cell_ship]: isShip },
        { [s.cell_miss]: isMiss },
        { [s.cell_hit]: isHit },
        { [s.cell_dead]: isDead },
      )}
      data-id={cellId}
    />
  )
}

export default ComputerCell