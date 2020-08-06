import React from "react";
import {useSelector} from "react-redux";
import ComputerCell from "../ComputerCell/ComputerCell";
import s from "../../BattleField/BattleField.module.scss";

const ComputerBattleField = ( {nickname} ) => {

  const following  = useSelector(state => {
    const { following } = state.game
    return following === 'Computer'
  })


  return (
    <div className={ s.battleField__body }>
      <p className={ s.battleField__nickname}>
        { nickname }
        <span> { following ? 'Ходит компьютер' : '' } </span>
      </p>
      <table className={ s.battleField__body__enemy }>
        <tbody>
        <ComputerCell/>
        </tbody>
      </table>
    </div>
  )
}

export default ComputerBattleField