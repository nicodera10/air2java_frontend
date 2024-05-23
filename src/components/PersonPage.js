import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';

const PersonPage = () => {
  const [persons, setPersons] = useState([]);
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {

    const storedUserType = localStorage.getItem('userType');
    setUserType(storedUserType);

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
      <h1>Liste des personnes</h1>
      {userType === 'admin' && <Link to="/user">Voir les utilisateurs</Link>}<br />
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