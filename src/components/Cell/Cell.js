import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeHeader, setBlock, setFollowing, setHit, setStatus} from "../../redux/actions/actionCreators";
import cn from "classnames";
import { setComputerShot } from "../../redux/actions/actionCreatorsPC";
import s from './Cell.module.scss'


const Cell = ( { cellId }) => {
  // console.log('CELL render')

  const dispatch = useDispatch()
  const [isMiss, setMiss] = useState(false)
  const { ships, shipCount, isBlock } = useSelector(state => state.game)


  const isHit = useSelector( state => {
    const { ships } = state.game
    const ship = ships.find( ship => ship.location.includes(cellId))
    if (ship) {
      const partOfShip = ship.location.indexOf(cellId)
      return ship.hit[partOfShip]
    }
  })

  const { ships: computerShips } = useSelector(state => state.computer)

  const isDead = useSelector( state => {
      const { ships } = state.game
      const ship = ships.find( ship => ship.location.includes(cellId))
      return ship && ship.dead
  })


  useEffect(() => {
    if(shipCount === 0) {
      dispatch(changeHeader('You win!'))
    }
  }, [])


  const handleCellClick = (event) => {
    event.stopPropagation()
    if(isBlock) return // если ходит комьютер то тут клик недоступен
    const cellId = event.target.dataset.id
    // console.log('ВЫБРАННАЯ ЯЧЕЙКА: ', cellId)

    if(!shipCount) return // если подстрерил все корабли противника - то больше не ходишь
    if(isMiss) return // запрет на клик по ячейкам
    setMiss(!isMiss)
    dispatch( setStatus('shot') ) // изменить кол-во выстрелов
    //
    const res = dispatch( setHit(ships, shipCount, cellId) ) // отправляем данные в store для смены состояния, в
    // случае если попали в кораблик

    //  когда попали в кораблик, снова остается ход у игрока
    // если не попали - то условие ниже
    if(!res) {
      dispatch(setFollowing('Computer')) // поменяем состояние в сторе для того - чей ход и запустим ход компьютера
      dispatch( setBlock() ) //заблокируем клики по ячейке
      setShotPc(computerShips) // запустим ход компьютера
    }
  }


  const setShotPc = (computerShips) => {
    setTimeout(() => {
      const  res = dispatch( setComputerShot(computerShips) )
      if(res) {
        return setShotPc(computerShips)
      }
    }, 500)
  }


  return (
    <td
      className={ cn(
          s.cell,
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