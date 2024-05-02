// src/components/LoginPage.js
import React, { useState } from 'react';
import api from '../api';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Appelez votre API pour vérifier les informations de connexion
      const response = await api.login(username, password);
      // Si l'authentification est réussie, passez les données utilisateur au parent (App.js)
      onLogin(response);
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
