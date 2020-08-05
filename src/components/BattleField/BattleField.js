import React from "react";
import PropTypes from 'prop-types';
import Field from "../Field/Field";
import s from './BattleField.module.scss';
import {useSelector} from "react-redux";


const BattleField = ( { nickname} ) => {

  const following  = useSelector(state => {
    const { following } = state.game
    return following === 'User'
  })

  const { ships: computerShips } = useSelector( state => state.computer )

  return (
    <div className={ s.battleField__body }>
      <p className={ s.battleField__nickname}>
        { nickname }
        <span> { following ? 'Ваш ход' : '' } </span>
      </p>
      <table className={ s.battleField__body__enemy }>
        <tbody>
          <Field computerShips={computerShips}/>
        </tbody>
      </table>
    </div>
  )
}

BattleField.proptype = {
  nickname: PropTypes.string.isRequired
}

export default BattleField

