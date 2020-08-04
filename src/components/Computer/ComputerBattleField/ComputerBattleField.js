import React from "react";
import s from "../../BattleField/BattleField.module.scss";
import ComputerField from "../ComputerField/ComputerField";
import {useSelector} from "react-redux";

const ComputerBattleField = ( {nickname} ) => {

  const following  = useSelector(state => {
    const { following } = state.game
    return following === 'Computer'
  })

  return (
    <div className={ s.battleField__body }>
      <p className={ s.battleField__nickname}>
        { nickname }
        <span> { following ? 'Ваш ход' : '' } </span>
      </p>
      <table className={ s.battleField__body__enemy }>
        <tbody>
        <ComputerField/>
        </tbody>
      </table>
    </div>
  )
}

export default ComputerBattleField