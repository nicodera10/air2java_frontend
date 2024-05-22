// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import UserPage from './components/UserPage';
import FestivalPage from './components/FestivalPage';
import BandPage from './components/BandPage';
import PersonPage from './components/PersonPage';
import LoginPage from './components/LoginPage';
import ConnexionApprouvedPage from './components/ConnexionApprouvedPage';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

const AppContent = () => {
  const [setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const location = useLocation();
  const hideNavbar = location.pathname === '/' || location.pathname === '/login';

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/festival" element={<FestivalPage />} />
        <Route path="/band" element={<BandPage />} />
        <Route path="/person" element={<PersonPage />} />
        <Route path="/connexionapprouved" element={<ConnexionApprouvedPage />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
