// src/components/PersonPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const PersonPage = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getAllPersons();
        setPersons(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    // Supprimer le cookie
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
    // Rediriger vers la page de connexion
    window.location.href = '/';
  };

  return (
    <div>
      <h1>Liste des personnes</h1>
      <Link to="/user">Voir les users</Link><br />
      <Link to="/festival">Voir les festivals</Link><br />
      <Link to="/band">Voir les bands</Link>
      <button onClick={handleLogout}>Déconnexion</button>
      <ul>
        {persons.map(person => (
          <li key={person.id_person}>
            <p>Nom: {person.lastname}</p>
            <p>Prénom: {person.firstname}</p>
            <p>Statut civil: {person.civil_status}</p>
            <p>Adresse: {person.address_1}</p>
            <p>Téléphone: {person.phone}</p>
            <p>Email: {person.email}</p>
            <p>Date de naissance: {person.birthdate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonPage;