// src/components/UserPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const UserPage = () => {
  const [appusers, setAppusers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getAllAppUsers();
        setAppusers(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des appusers</h1>
      <Link to="/person">Voir les persons</Link><br />
      <Link to="/festival">Voir les festivals</Link><br />
      <Link to="/band">Voir les bands</Link>
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