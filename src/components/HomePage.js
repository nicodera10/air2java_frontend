import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';
import Navbar from './Navbar';

const HomePage = () => {
  const [festivals, setFestivals] = useState([]);
  const isLoggedIn = localStorage.getItem('userName');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getLatestFestivals();
        setFestivals(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
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
      <h1>Air de Java</h1>
      {!isLoggedIn ? (
        <Link to="/login">Se connecter</Link>
      ) : (
        <div>
          <Navbar />
          <button onClick={handleLogout}>Déconnexion</button>
        </div> // Affichez la navbar si l'utilisateur est connecté
      )}
      <ul>
        {festivals.map(festival => (
          <li key={festival.id_fest}>
            <p>Nom du festival: {festival.name_fest}</p>
            <p>Emplacement: {festival.location_fest}</p>
            <p>Date de début: {festival.start_date_fest}</p>
            <p>Date de fin: {festival.end_date_fest}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;