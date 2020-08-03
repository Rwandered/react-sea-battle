import React from "react";
import s from './StatusField.module.scss'
import {useSelector} from "react-redux";

const StatusField = () => {

  const {record, shot, hit, dead } = useSelector(state => state.status)

  return (
    <div className={ s.battle__statusField}>
      <ul>
        <li className={ s.battle__statusField__list }>
          <span>Рекорд:</span>
          <span id="record">
            {record}
          </span>
        </li>
        <li className={ s.battle__statusField__list }>
          <span>Выстрелов:</span>
          <span id="shot">
            {shot}
          </span>
        </li>
        <li className={ s.battle__statusField__list }>
          <span>Попаданий:</span>
          <span id="hit">
            {hit}
          </span>
        </li>
        <li className={ s.battle__statusField__list }>
          <span>Потоплено:</span>
          <span id="dead">
            {dead}
          </span>
        </li>
      </ul>
    </div>
  )
}

export default StatusField