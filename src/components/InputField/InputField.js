import React, {useReducer, useState} from "react";
import s from './InputField.module.scss'
import Control from "../Contol/Control";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/actions/actionCreators";
import { useHistory } from "react-router";


const InputField = () => {

  // const [inpValue, setInpValue] = useState({
  //   userName: '',
  //   pcName: ''
  // })

  const [inpValue, setInpValue] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {userName: '', pcName: ''}
  );

  const dispatch = useDispatch()
  const history = useHistory()


  const handlerSubmitForm = (event) => {
    event.preventDefault()

    dispatch( setAuth( {
      userName: inpValue['userName'],
      pcName: inpValue['pcName']
    }))

    history.push('/')
  }

  const handlerInputChange = (event) => {
    const { name, value } = event.target
    // setInpValue({ ...inpValue, [name]: value} // для useState
    setInpValue({ [name]: value })
  }

  return (
    <form
      className={s.form}
      onSubmit={ handlerSubmitForm }
    >
      <input
        type={'text'}
        value={ inpValue['userName'] }
        onChange={ handlerInputChange }
        name={'userName'}
        placeholder={'Your name'}
      />
      <input
        value={ inpValue['pcName'] }
        onChange={ handlerInputChange }
        name={'pcName'}
        placeholder={'Opponent name'}
      />
      <Control
        value={'To Battle'}
        type={'submit'}
        target={'battle'}
      />
    </form>
  )
}

export default InputField