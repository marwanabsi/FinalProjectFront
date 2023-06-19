import React from 'react';
import './LoginForm.css';
import mainLogo from './image/logo.png';
import frame from './image/frame.png';

const LoginFormView = ({ email, password, handleEmailChange, handlePasswordChange, handleSubmit }) => {
  return (
    <div className='box-login'>
      <div className="login-container">
        <div className='logo-login'>
          <img src={mainLogo} alt="Logo" />
        </div>
        <div className='bodyLogin'>
          <div className="picture-container">
            <img src={frame} alt="image1" />
          </div>
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className='email'>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label htmlFor="password" className='usernamePass'>Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button className='loginButton' type="submit">Login</button>
            </form>
          </div>   
        </div>
      </div>
    </div>
  );
};

export default LoginFormView;
