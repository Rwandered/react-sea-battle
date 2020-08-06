import React from "react";
import {field} from "../../constants/constants";
import Cell from "../Cell/Cell";
import withField from "../../HOCS/withField";



const Field = () => {

  return (
    <>
      {
        field.map( (elem, index) => (
            <tr key={index}>
              {
                elem.map( (cell, cellIndex) => (
                  <Cell
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

export default  React.memo(Field)

