import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const ConnexionApprouvedPage = () => {
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
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
      console.log('déco ok');
      localStorage.removeItem('userType');
      localStorage.removeItem('userName');
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <h1>Connexion réussie</h1>
      <p>Bienvenue, {userName} !</p>
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  );
}

export default ConnexionApprouvedPage;
