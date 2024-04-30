// src/components/PersonPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const BandPage = () => {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getAllBands();
        setBands(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des personnes</h1>
      <Link to="/user">Voir les users</Link><br />
      <Link to="/festival">Voir les festivals</Link><br />
      <Link to="/person">Voir les persons</Link>
      <ul>
        {bands.map(band => (
          <li key={band.id}>
            <p>Nom du groupe: {band.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BandPage;