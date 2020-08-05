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
  const dispatch = useDispatch()
  const history = useHistory()
  const { userName, pcName } = useSelector( state => state.auth)
  const { ships }  = useSelector(state => state.game)


  const genShip = () => {
      const ships = gameOptions.generateShips('user')
      const computerShips = gameOptions.generateShips('computer')
      ships && dispatch( setGame({ships: ships, shipCount: ships.length}))
      computerShips && dispatch( setPcSettings({ships: computerShips, shipCount: computerShips.length}))
    return {
      ships,
      computerShips
    }
  }


  useEffect(() => {
    if (ships.length === 0) {
      genShip()
    }
  }, [])


  if(!userName) {
    history.push('/auth')
  }

  if(!ships.length) {
    return <h1>Идет расстановка кораблей....</h1>
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