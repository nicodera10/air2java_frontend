// src/components/PersonPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const HomePage = () => {
  const [festivals, setFestivals] = useState([]);

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

  return (
    <div>
      <h1>Liste des festivals</h1>
      <Link to="/login">Se connecter</Link><br />
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