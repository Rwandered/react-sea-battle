import React from "react";
import PropTypes from 'prop-types'
import cn from 'classnames'
import s from './Control.module.scss'
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {changeHeader, resetGame, resetStatus, resetStore} from "../../redux/actions/actionCreators";
import {resetPc} from "../../redux/actions/actionCreatorsPC";

const Control = ( { value, type = 'button', target } ) => {

  const history = useHistory()
  const dispatch = useDispatch()

  const handleControlClick = (event) => {
    const { id } = event.target.dataset
    // console.log('BUTTON ID: ', id)
    switch (id){
      case 'exit':
        // console.log('BUTTON ID IN EXIT: ', id)
        // dispatch( resetGame() )
        // dispatch( resetStatus() )
        // dispatch ( changeHeader(''))
        // dispatch( resetPc() )
        dispatch( resetStore() )
        return history.push('/auth')

      // case 'restart':
      //   dispatch( resetGame() )
      //   dispatch( resetStatus() )
      //   dispatch ( changeHeader(''))
      //   dispatch( resetPc() )
      //   break
      //   // return history.push('/')
      case 'battle':
        // console.log('BUTTON ID IN BATTLE: ', id)
        break
      default:
        return history.push('/auth')
    }
  }

  return (
    <button
      type={type}
      className={ cn(s.control, { [s.control_sub]: type === 'button'  } ) }
      data-id={ target }
      onClick={ handleControlClick }
    >
      { value }
    </button>
  )
}

Control.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  target: PropTypes.string.isRequired,
}

export default Control