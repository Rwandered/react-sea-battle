import React from 'react';
import Control from "../Contol/Control";
import {useSelector} from "react-redux";
import s from "./ModalWindow.module.scss";

const ModalWindow = ( { result = 'Sea Battle!' } ) => {

 const { value } = useSelector( state => state.game.modal)


  return (
    <div className={s.modal__layer}>
      <div className={s.modal__window}>
        <div className={s.modal__row}>
          <div className={s.modal__body}>
            <h2>{ value || result }</h2>
          </div>
          <Control value={ 'End game' } target={'exit'}/>
        </div>
      </div>
    </div>
  )
}

export default ModalWindow



