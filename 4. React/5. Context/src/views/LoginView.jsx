import React from 'react';
import './LoginView.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../context';

function LoginView() {

  const [password, setPassword] = useState('');
  const email = useRef('');
  const navigate = useNavigate();
  const { setEmail } = useStoreContext();

  function login(event) {
    event.preventDefault();
    if (password === "iloveyou") {
      navigate('/movies/all');
      setEmail(email.current.value);
    } else {
      alert("Wrong password!");
    }
  }

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Login to Your Account</h2>
        <form onSubmit={(event) => { login(event) }}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" ref={email} required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(event) => { setPassword(event.target.value) }} required />

          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="register-link">New to Netflix? <a href="#">Register now</a></p>
      </div>
    </div>
  );
}

export default LoginView;
