import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';
import mainLogo from'./image/logo.png';
import frame from './image/frame.png';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
        email: email,
        password: password,
      });

      console.log('Login successful:', response.data);

      navigate('/home');
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div className="box-login">
  <div className="login-container">
    <div className="bodyLogin">

    <div className="logo-login">
        <img src={mainLogo} alt="Logo" />
      </div>
      <div className="form-and-image">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="username">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="usernamePass">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button className="loginButton" type="submit">Login</button>
        </form>
      </div>
      
      <div className="picture-container">
        <img src={frame} alt="Image" />
      </div>
      </div>
      
    </div>
  </div>
</div>

  );
};

export default LoginForm;
