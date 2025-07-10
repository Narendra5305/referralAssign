import React, { useState, useContext } from 'react';
import axios from 'axios';
import { baseUrl } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/api/users/login`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      login(res.data.token);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
