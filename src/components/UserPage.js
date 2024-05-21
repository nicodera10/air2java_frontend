//loiacono_nicolas_adj_front/src/components/UserPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Pour accessibilité

const UserPage = () => {
  const [appusers, setAppusers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    type: '',
    password: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await api.getAllAppUsers();
      setAppusers(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await api.logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.createAppUser(newUser); // Assurez-vous d'ajouter cette méthode dans api.js
      fetchData(); // Rafraîchissez la liste des utilisateurs après ajout
      handleCloseModal();
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur:', error);
    }
  };

  return (
    <div>
      <h1>Liste des appusers</h1>
      <button onClick={handleOpenModal}>Ajouter un utilisateur</button>
      <Link to="/person">Voir les personnes</Link><br />
      <Link to="/festival">Voir les festivals</Link><br />
      <Link to="/band">Voir les groupes</Link>
      <button onClick={handleLogout}>Déconnexion</button>
      <ul>
        {appusers.map(appuser => (
          <li key={appuser.id_appuser}>
            <p>ID de l'utilisateur : {appuser.id_appuser}</p>
            <p>Nom de l'utilisateur : {appuser.name}</p>
            <p>Type : {appuser.type}</p>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Ajouter un utilisateur"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <h2>Ajouter un utilisateur</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nom :</label>
            <input type="text" name="name" value={newUser.name} onChange={handleInputChange} />
          </div>
          <div>
            <label>Type :</label>
            <input type="text" name="type" value={newUser.type} onChange={handleInputChange} />
          </div>
          <div>
            <label>Mot de passe :</label>
            <input type="password" name="password" value={newUser.password} onChange={handleInputChange} />
          </div>
          <button type="submit">Ajouter</button>
          <button type="button" onClick={handleCloseModal}>Annuler</button>
        </form>
      </Modal>
    </div>
  );
}

export default UserPage;
