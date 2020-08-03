import React from "react";
import PropTypes from 'prop-types'
import cn from 'classnames'
import s from './Control.module.scss'
import {useHistory} from "react-router";

const Control = ( { value, type = 'button', target } ) => {

  const history = useHistory()

  const handleControlClick = (event) => {

    const { id } = event.target.dataset
    switch (id){
      case 'exit':
        return history.push('/auth')
      case 'restart':
        return history.push('/')
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