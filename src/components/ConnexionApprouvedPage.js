//loiacono_nicolas_adj_front/src/components/ConnexionApprouvedPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ConnexionApprouvedPage = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Récupération du nom d'utilisateur depuis le localStorage
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <div>
      <h1>Connexion réussie</h1>
      <p>Bienvenue, {userName} !</p>
      <Link to="/user">Voir les utilisateurs</Link><br />
      <Link to="/festival">Voir les festivals</Link><br />
      <Link to="/person">Voir les personnes</Link><br />
      <Link to="/band">Voir les groupes</Link>
    </div>
  );
}

export default ConnexionApprouvedPage;
