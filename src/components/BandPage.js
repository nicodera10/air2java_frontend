import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';

const BandPage = () => {
  const [bands, setBands] = useState([]);
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Récupération du userType de localStorage
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
      {userType === 'admin' && <Link to="/user">Voir les utilisateurs</Link>}<br />
      <Link to="/festival">Voir les festivals</Link><br />
      <Link to="/person">Voir les personnes</Link>
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
