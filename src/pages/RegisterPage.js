import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [sex, setSex] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !height || !weight || !sex || !email || !password) {
      setError('Please fill out all fields');
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setError('Invalid email address');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    // Add registration logic here
    console.log('Name:', name);
    console.log('Height:', height);
    console.log('Weight:', weight);
    console.log('Sex:', sex);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
        </label>
        <br />
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />
        </label>
        <br />
        <label>
          Sex:
          <select value={sex} onChange={(event) => setSex(event.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;