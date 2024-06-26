import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const FestivalPage = () => {
  const [festivals, setFestivals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    setUserType(storedUserType);
    const fetchData = async () => {
      try {
        const data = await api.getAllFestivals();
        setFestivals(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);

  // Fonction de gestion pour mettre à jour l'état de la recherche
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtrer les festivals en fonction de la valeur de recherche
  const filteredFestivals = festivals.filter(festival => {
    return festival.name_fest.toLowerCase().includes(searchTerm.toLowerCase());
  });

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
      <h1>Liste des festivals</h1>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un festival"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <button onClick={handleLogout}>Déconnexion</button>

      <ul>
        {/* Affichage des festivals filtrés */}
        {filteredFestivals.map(festival => (
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

export default FestivalPage;
