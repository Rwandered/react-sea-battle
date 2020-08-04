import React, {useEffect} from "react";
import PropTypes from "prop-types";
import s from './Header.module.scss'
import {useSelector} from "react-redux";


const Header = ({ title }) => {

  const { headerTitle } = useSelector(state => state.header)

  return (
    <div className={ s.header}>
      <h1> { headerTitle || title } </h1>
    </div>
  )
}

Header.proptype = {
  title: PropTypes.string.isRequired,
}

export default Header