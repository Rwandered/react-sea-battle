import React from "react";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import s from "./Auth.module.scss";


const Auth = () => {

  return (
    <div className={ s.auth__wrapper }>
      <Header title={'Sea Battle'}/>
      <>
        <InputField/>
      </>
    </div>
  )
}

export default Auth