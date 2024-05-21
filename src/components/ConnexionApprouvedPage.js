//loiacono_nicolas_adj_front/src/components/ConnexionApprouvedPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const ConnexionApprouvedPage = () => {
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    // Récupération du nom d'utilisateur depuis le localStorage
    const storedUserType = localStorage.getItem('userType');
    setUserType(storedUserType);
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = async () => {
    try {
        await api.logout();
    } catch (error) {
        console.error('Error logging out:', error);
    }
};

  return (
    <div>
      <h1>Connexion réussie</h1>
      <p>Bienvenue, {userName} !</p>
      {userType === 'admin' && <Link to="/user">Voir les utilisateurs</Link>}<br />
      <Link to="/festival">Voir les festivals</Link><br />
      <Link to="/person">Voir les personnes</Link><br />
      <Link to="/band">Voir les groupes</Link>
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  );
}

export default ConnexionApprouvedPage;
