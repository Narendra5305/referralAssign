

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./app.css"

import Login from './pages/signin';
import Register from './pages/Registerations';
import ReferCandidate from './pages/ReferCandidates';
import Navbar from './components/Navbaar';
import PrivateRoute from './components/privateRoutes';
import Dashboard from './pages/Dashboardd';


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