// src/components/UserPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import Cookies from 'js-cookie'; // Importez la bibliothèque js-cookie

const UserPage = () => {
  const [appusers, setAppusers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour suivre l'authentification de l'utilisateur

  useEffect(() => {
    fetchData();
    checkLoggedIn();
  }, []);

  const fetchData = async () => {
    try {
      const data = await api.getAllAppUsers();
      setAppusers(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  const checkLoggedIn = () => {
    // Vérifier si l'utilisateur est connecté en vérifiant la présence du token dans les cookies
    const token = Cookies.get('token'); // Utilisez Cookies.get() pour récupérer le token
    setIsLoggedIn(!!token); // Met à jour l'état isLoggedIn en fonction de la présence du token
  };

  const handleLogout = () => {
    // Supprimer le token des cookies
    Cookies.remove('token');
    // Rediriger vers la page de connexion
    window.location.href = '/';
  };

  return (
    <div>
      <h1>Liste des appusers</h1>
      {isLoggedIn ? (
        <>
          <Link to="/person">Voir les persons</Link><br />
          <Link to="/festival">Voir les festivals</Link><br />
          <Link to="/band">Voir les bands</Link>
          <button onClick={handleLogout}>Déconnexion</button>
        </>
      ) : (
        <>
          <Link to="/person">Voir les persons</Link><br />
          <Link to="/festival">Voir les festivals</Link><br />
          <Link to="/band">Voir les bands</Link>
          <Link to="/">Connexion</Link>
        </> // Bouton Connexion redirigeant vers la page de connexion
      )}
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
