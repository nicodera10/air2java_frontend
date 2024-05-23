import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const BandPage = () => {
  const [bands, setBands] = useState([]);
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    setUserType(storedUserType);

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
      <h1>Liste des groupes</h1>
      <button onClick={handleLogout}>Déconnexion</button>

      <ul>
        {bands.map(band => (
          <li key={band.id}>
            <p>Nom du groupe: {band.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BandPage;
