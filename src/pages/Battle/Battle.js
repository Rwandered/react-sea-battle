import React, {useEffect} from "react";
import Header from "../../components/Header/Header";
import BattleField from "../../components/BattleField/BattleField";
import StatusField from "../../components/StatusField/StatusField";
import Control from "../../components/Contol/Control";
import {useDispatch, useSelector} from "react-redux";
import {gameOptions} from "../../utils/game";
import {useHistory} from "react-router";
import {setGame} from "../../redux/actions/actionCreators";
import ComputerBattleField from "../../components/Computer/ComputerBattleField/ComputerBattleField";
import {setPcSettings} from "../../redux/actions/actionCreatorsPC";
import s from './Battle.module.scss'



const Battle = () => {

  const dispatch = useDispatch() //вызываем хук для получения dispatch из store
  const history = useHistory() // для работы в роутером
  const { userName, pcName } = useSelector( state => state.auth) // вытягиваем данные из store
  const { ships }  = useSelector(state => state.game)

// генерирует расположение кораблей
  const genShip = () => {
      const ships = gameOptions.generateShips('user') // для пользователя
      const computerShips = gameOptions.generateShips('computer') // для компьютера
      //отправляем сгенерированные данные к store
      ships && dispatch( setGame({ships: ships, shipCount: ships.length}))
      computerShips && dispatch( setPcSettings({ships: computerShips, shipCount: computerShips.length}))
    return {
      ships,
      computerShips
    }
  }


  useEffect(() => { // при рендере компонента, будет происходит генерация кораблей, если их нет в store
    if (ships.length === 0) {
      genShip()
    }
  }, [])

  // если пользователей нет - редирект на auth component
  if(!userName) {
    history.push('/auth')
  }

  // заглушка если корабли не расстановлены
  if(!ships.length) {
    return <h2>Идет расстановка кораблей....</h2>
  }

  return (
    <div className={s.seaBattle__wrapper}>
      <Header title={'To Battle'}/>
      <StatusField/>
      <div className={s.battle}>
        <ComputerBattleField nickname={ `${pcName} - computer` }/>
        <BattleField nickname={ `${userName} - you` } isPc/>
      </div>
      <div className={s.seaBattle__footer}>
        <Control value={ 'End game' } target={'exit'}/>
      </div>
    </div>
  )
}

export default Battle