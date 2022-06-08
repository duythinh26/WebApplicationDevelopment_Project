import React, { useState } from 'react';
import styledComponents from "styled-components";
import "../components/css/LoginPage.css";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Error = styledComponents.span`
  color: red;
`;

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className='login__container'>
      <div className="login__wrapper">
        <h1 className="login__title">Sign In</h1>
        <form action="" className="login__form">
          <input className='login__input' type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
          <input className='login__input' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
          <button className="login__button" onClick = { handleClick } disabled = { isFetching }>Login</button>
          {error && <Error>Something went wrong...</Error>}
          <a className='account-reback' href="">Forgot Password?</a>
          <a className='account-reback' href="">Create new account</a>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;