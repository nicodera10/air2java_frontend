//loiacono_nicolas_adj_front/src/components/UserPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const UserPage = () => {
  const [appusers, setAppusers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await api.getAllAppUsers(); // Utilisation de la méthode pour récupérer les utilisateurs avec le cookie inclus
      setAppusers(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };


  const handleLogout = async () => {
    try {
        await api.logout();
    } catch (error) {
        console.error('Error logging out:', error);
    }
};


  return (
    <div>
      <h1>Liste des appusers</h1>
      
        <>
          <Link to="/person">Voir les persons</Link><br />
          <Link to="/festival">Voir les festivals</Link><br />
          <Link to="/band">Voir les bands</Link>
          <button onClick={handleLogout}>Déconnexion</button>
        </>
      
        <>
          <Link to="/person">Voir les persons</Link><br />
          <Link to="/festival">Voir les festivals</Link><br />
          <Link to="/band">Voir les bands</Link>
          <Link to="/">Connexion</Link>
        </>
      
      <ul>
        {appusers.map(appuser => (
          <li key={appuser.id_appuser}>
            <p>ID de l'utilisateur : {appuser.id_appuser}</p>
            <p>Type : {appuser.type.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;
