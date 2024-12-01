// pages/LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  const handleRegisterClick = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="container">
        <h1>Login/Register</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
            />
            Remember Me
          </label>
          <br />
          <button type="submit"><Link to="/HomePageSecond">Login</Link></button>
          <button type="submit" onClick={handleRegisterClick}><Link to="/RegisterPage">Register</Link></button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;