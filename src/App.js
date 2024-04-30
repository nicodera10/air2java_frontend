// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importez Routes au lieu de Switch
import UserPage from './components/UserPage';
import FestivalPage from './components/FestivalPage';
import BandPage from './components/BandPage';
import PersonPage from './components/PersonPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/user" element={<UserPage />} />
          <Route path="/festival" element={<FestivalPage />} />
          <Route path="/band" element={<BandPage />} />
          <Route path="/person" element={<PersonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
