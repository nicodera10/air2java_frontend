// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
// Initialisez navigate en utilisant le hook useNavigate
const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Appelez votre API pour vérifier les informations de connexion
      const response = await api.login(username, password);
      // Stockez le token côté client
      localStorage.setItem('token', response.token);
      // Utilisez history.push pour rediriger l'utilisateur vers la page de festival
      navigate('/festival');
    } catch (error) {
      console.error('Erreur de connexion :', error);
      // Gérez les erreurs de connexion
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
