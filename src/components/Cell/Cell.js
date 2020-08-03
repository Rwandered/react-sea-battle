import React, {useReducer, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import cn from "classnames";
import s from './Cell.module.scss'
import {changeHeader, setStatus} from "../../redux/actions/actionCreators";
import {game} from "../../utils/game";

const Cell = ( { xCor, yCor, isPc }) => {
  console.log('CELL')

  // const [cellStatus, setCellStatus] = useState({
  //   isMiss: false,
  //   isHit: false,
  //   isDead: false,
  // })



  const [isMiss, setMiss] = useState(false)
  const [isHit, setHit] = useState(false)
  const [isDead, setDead] = useState(false)

  const dispatch = useDispatch()

  const handleCellClick = (event) => {
    event.stopPropagation()
    const cellId = event.target.dataset.id

    if(isPc) {
      // setCellStatus(cellStatus => ({...cellStatus,  isMiss: true}) )
      if(game.shipCount < 1) return
      if(isMiss) return
      setMiss(!isMiss)
      dispatch( setStatus('shot') )

      game.ships.forEach( (ship, index) => {
        const partOfShip = ship.location.indexOf(cellId)
        console.log('partOfShip: ',partOfShip)
        if(partOfShip >= 0) {
          ship.hit[partOfShip] = 'x'
          setHit(!isHit)
          setMiss(!isMiss)
          dispatch( setStatus('hit') )
          // console.log('попали: ', ship.hit)
          if( !ship.hit.includes('')) {
            setDead(!isDead)
            setMiss(!isMiss)
            setHit(!isHit)
            dispatch( setStatus('dead') )

            game.shipCount -= 1
            if(game.shipCount < 1) {
              dispatch(changeHeader('Game end!'))
            }
          }
        }
      })
    }
  }

  return (
    <td
      className={ cn(
          { [s.cell_miss]: isMiss },
          { [s.cell_hit]: isHit },
          { [s.cell_dead]: isDead }
        )}
      data-id={xCor+ '' + yCor}
      onClick={ handleCellClick }
    />
  )
}

export default Cell