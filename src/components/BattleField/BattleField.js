import React from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import Cell from "../Cell/Cell";
import s from "./BattleField.module.scss";


const BattleField = ( { nickname} ) => {

  // забираем из стора данные о том, кто ходит следующий
  const following  = useSelector(state => {
    const { following } = state.game
    return following === 'User'
  })

  return (
    <div className={ s.battleField__body }>
      <p className={ s.battleField__nickname}>
        { nickname }
        <span> { following ? 'Ваш ход' : '' } </span>
      </p>
      <table className={ s.battleField__body__enemy }>
        <tbody>
          <Cell/>
        </tbody>
      </table>
    </div>
  )
}

BattleField.proptype = {
  nickname: PropTypes.string.isRequired
}

export default BattleField

