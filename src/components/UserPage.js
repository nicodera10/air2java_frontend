//loiacono_nicolas_adj_front/src/components/UserPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import Cookies from 'js-cookie'; // Importez la bibliothèque js-cookie

const UserPage = () => {
  const [appusers, setAppusers] = useState([]);
  //const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour suivre l'authentification de l'utilisateur

  useEffect(() => {
    fetchData();
    //checkLoggedIn();
  }, []);

  const fetchData = async () => {
    try {
      const data = await api.getAllAppUsers(); // Utilisation de la méthode pour récupérer les utilisateurs avec le cookie inclus
      setAppusers(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  /*const checkLoggedIn = () => {
    // Vérifier si le cookie a été transmis
    const cookies = document.cookie.split(';');
    const hasCookie = cookies.some(cookie => cookie.trim().startsWith('token='));
    setIsLoggedIn(hasCookie); // Mettre à jour l'état isLoggedIn en fonction de la présence du cookie
  };*/

  const handleLogout = () => {
    // Supprimer le cookie
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
    // Rediriger vers la page de connexion
    window.location.href = '/';
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
