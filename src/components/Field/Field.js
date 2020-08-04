import React from "react";
import {field} from "../../constants/constants";
import Cell from "../Cell/Cell";



const Field = ({ computerShips }) => {

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
                    computerShips={computerShips}
                  />
                ))
              }
            </tr>
          ))
      }
    </>
  )
}

export default React.memo(Field)