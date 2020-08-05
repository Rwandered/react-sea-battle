import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeHeader, setFollowing, setHit, setStatus} from "../../redux/actions/actionCreators";
import cn from "classnames";
import s from './Cell.module.scss'
import {setComputerShot} from "../../redux/actions/actionCreatorsPC";

const Cell = ( { cellId }) => {

  console.log('CELL render')

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

  const { ships: computerShips , shipCount: computerShipCount} = useSelector( state => state.computer )

  const isDead = useSelector( state => {
      const { ships } = state.game
      const ship = ships.find( ship => ship.location.includes(cellId))
      return ship && ship.dead
  })


  useEffect(() => {
    if(shipCount === 0) {
      dispatch(changeHeader('You win!'))
    } else {
      dispatch(changeHeader('To Battle!'))
    }
  }, [])


  const handleCellClick = (event) => {
    event.stopPropagation()
    const cellId = event.target.dataset.id

    if(!shipCount) return
    if(isMiss) return
    setMiss(!isMiss)
    dispatch( setStatus('shot') )

    const res = dispatch( setHit(ships, shipCount, cellId) )
    console.log('res: ', res)
    if(!res) {
      dispatch(setFollowing('Computer'))
      setShotPc(computerShips)
    }
  }


  const setShotPc = (computer) => {
    // setTimeout(() => {
      const  res = dispatch( setComputerShot(computer) )
      if(res) {
        return setShotPc(computer)
      }
    // }, 500)

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