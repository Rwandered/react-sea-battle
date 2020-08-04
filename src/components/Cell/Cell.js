import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeHeader, setHit, setStatus} from "../../redux/actions/actionCreators";
import cn from "classnames";
import s from './Cell.module.scss'

const Cell = ( { isPc, cellId }) => {

  console.log('CELL')

  const [isMiss, setMiss] = useState(false)
  const dispatch = useDispatch()
  const { ships, shipCount } = useSelector(state => state.game)

  const isHit = useSelector( state => {
    const { ships } = state.game
    const ship = ships.find( ship => ship.location.includes(cellId))
    if (ship) {
      const partOfShip = ship.location.indexOf(cellId)
      return ship.hit[partOfShip]
    }
  })

  const isDead = useSelector( state => {
      const { ships } = state.game
      const ship = ships.find( ship => ship.location.includes(cellId))
      return ship && ship.dead
  })

  useEffect(() => {
    if(shipCount === 0) {
      dispatch(changeHeader('Game end!'))
    }
  }, [shipCount])


  const handleCellClick = (event) => {
    event.stopPropagation()

    if(isPc) {
      const cellId = event.target.dataset.id

      if(!shipCount) return
      if(isMiss) return

      setMiss(!isMiss)
      dispatch( setStatus('shot') )
      dispatch( setHit(ships, shipCount, cellId) )
    }
  }


  return (
    <td
      className={ cn(
          { [s.cell_miss]: isMiss },
          { [s.cell_hit]: isHit },
          { [s.cell_dead]: isDead }
        )}
      data-id={cellId}
      onClick={ handleCellClick }
    />
  )
}

export default Cell