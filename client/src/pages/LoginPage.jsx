import React from 'react';
import "../components/css/LoginPage.css"

const LoginPage = () => {
  return (
    <div className='login__container'>
      <div className="login__wrapper">
        <h1 className="login__title">Sign In</h1>
        <form action="" className="login__form">
          <input className='login__input' type="text" placeholder='Username'/>
          <input className='login__input' type="password" placeholder='Password'/>
          <button className="login__button">Login</button>
          <a href="#">Forgot Password?</a>
          <a href="#">Create new account</a>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;