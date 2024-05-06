// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import Cookies from 'js-cookie'; // Importez la bibliothèque js-cookie

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login(username, password);
      // Stockez le token en tant que cookie avec une durée de validité
      Cookies.set('token', response.token, { expires: 7 }); // Exemple : le cookie expire après 7 jours
      navigate('/user');
    } catch (error) {
      console.error('Erreur de connexion :', error);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Nom d'utilisateur :</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginPage;
