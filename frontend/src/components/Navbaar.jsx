import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

import { AuthContext } from '../context/authContexts';


const Navbar = () => {
    
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null); // or setToken('')
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h2>Candidate Portal</h2>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/refer">Refer</Link>

        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
