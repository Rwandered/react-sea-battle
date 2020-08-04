import React, {useEffect, useState} from "react";
import cn from "classnames";
import {field} from "../../../constants/constants";
import {useDispatch, useSelector} from "react-redux";
import {changeHeader} from "../../../redux/actions/actionCreators";
import s from '../../Cell/Cell.module.scss'
import ComputerCell from "../ComputerCell/ComputerCell";


const ComputerField = () => {
  return (
    <>
      {
        field.map( (elem, index) => (
          <tr key={index}>
            {
              elem.map( (cell, cellIndex) => (
                 <ComputerCell
                   key={''+index+cellIndex}
                   cellId={index+ '' + cellIndex}
                 />
              ))
            }
          </tr>
        ))
      }
    </>
  )
}

export default React.memo(ComputerField)