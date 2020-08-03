import React from "react";
import Header from "../../components/Header/Header";
import s from './Battle.module.scss'
import BattleField from "../../components/BattleField/BattleField";
import StatusField from "../../components/StatusField/StatusField";
import Control from "../../components/Contol/Control";
import {useSelector} from "react-redux";

const Battle = () => {
  console.log('Battle')

  const { userName, pcName} = useSelector( state => state.auth)

  return (
    <div className={s.seaBattle__wrapper}>
      <Header title={'To Battle'}/>
      <StatusField/>
      <div className={s.battle}>
        <BattleField nickname={ userName } isPc={ false }/>
        <BattleField nickname={ `${pcName} - computer` } isPc/>
      </div>
      <div className={s.seaBattle__footer}>
        <Control value={ 'End game' } target={'exit'}/>
        <Control value={ 'Restart' } target={'restart'}/>
      </div>
    </div>
  )
}

export default Battle