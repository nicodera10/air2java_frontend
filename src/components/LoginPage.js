//loiacono_nicolas_adj_front/src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Ajout de l'état pour stocker les erreurs
  // Initialisez navigate en utilisant le hook useNavigate
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login(username, password);
      // Stockez le userName côté client
      localStorage.setItem('userName', response.userName);
      localStorage.setItem('userType', response.userType)
      // Utilisez navigate pour rediriger l'utilisateur vers la page de festival
      navigate('/connexionapprouved');
    } catch (error) {
      console.error('Erreur de connexion :', error);
      setError('Nom d\'utilisateur ou mot de passe incorrect'); // Affichage de l'erreur
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Affichage de l'erreur */}
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
