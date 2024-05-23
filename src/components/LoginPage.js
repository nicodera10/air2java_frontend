import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login(username, password);
      localStorage.setItem('userName', response.userName);
      localStorage.setItem('userType', response.userType)
      navigate('/connexionapprouved');
    } catch (error) {
      console.error('Erreur de connexion :', error);
      setError('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <div>
      <Link to="/">Page d'accueil</Link><br />
      <h2>Connexion</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
