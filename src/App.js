//loiacono_nicolas_adj_front/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPage from './components/UserPage';
import FestivalPage from './components/FestivalPage';
import BandPage from './components/BandPage';
import PersonPage from './components/PersonPage';
import LoginPage from './components/LoginPage';
import ConnexionApprouvedPage from './components/ConnexionApprouvedPage';

function App() {
  const [setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <div>
        <Routes>
          
            <>
              <Route path="/user" element={<UserPage />} />
              <Route path="/festival" element={<FestivalPage />} />
              <Route path="/band" element={<BandPage />} />
              <Route path="/person" element={<PersonPage />} />
              <Route path="/connexionapprouved" element={<ConnexionApprouvedPage />} />
            </>
          
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
