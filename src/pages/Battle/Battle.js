import React, {useEffect} from "react";
import Header from "../../components/Header/Header";
import BattleField from "../../components/BattleField/BattleField";
import StatusField from "../../components/StatusField/StatusField";
import Control from "../../components/Contol/Control";
import {useDispatch, useSelector} from "react-redux";
import {gameOptions} from "../../utils/game";
import {setGame} from "../../redux/actions/actionCreators";
import ComputerBattleField from "../../components/Computer/ComputerBattleField/ComputerBattleField";
import {setPcSettings} from "../../redux/actions/actionCreatorsPC";
import s from './Battle.module.scss'

const Battle = () => {

  const { userName, pcName} = useSelector( state => state.auth)
  const { ships }  = useSelector(state => state.game)
  const { ships: computerShip } = useSelector( state => state.computer)
  const dispatch = useDispatch()

  const genShip = async () => {
    setTimeout(() => {
      const ships = gameOptions.generateShips()
      const computerShips = gameOptions.generateShips()
      ships && dispatch( setGame({ships: ships, shipCount: ships.length}))
      computerShips && dispatch( setPcSettings({ships: computerShips, shipCount: computerShips.length}))
    }, 0)
  }

  useEffect(() => {
    // const ships = generateShips(gameOptions)
    // const ships = gameOptions.generateShips()
    // console.log('ships: ', ships)
    // ships && dispatch( setGame({ships: ships, shipCount: ships.length}))
    genShip()
  }, [])

  if(!ships.length) {
    return <h1>Идет расстановка кораблей....</h1>
  }

  return (
    <div className={s.seaBattle__wrapper}>
      <Header title={'To Battle'}/>
      <StatusField/>
      <div className={s.battle}>
        {/*<BattleField nickname={ `${userName} - you` } isPc={ false }/>*/}
        <ComputerBattleField nickname={ `${pcName} - computer` }/>
        <BattleField nickname={ `${userName} - you` } isPc/>
      </div>
      <div className={s.seaBattle__footer}>
        <Control value={ 'End game' } target={'exit'}/>
        <Control value={ 'Restart' } target={'restart'}/>
      </div>
    </div>
  )
}

export default Battle