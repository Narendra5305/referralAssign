

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import "./app.css"

import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import ReferCandidate from './pages/ReferCandidate';


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route path="/refer" element={
          <PrivateRoute>
            <ReferCandidate />
          </PrivateRoute>
        }
      />

        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} /> 
      </Routes>
    </Router>
  );
}

export default App;