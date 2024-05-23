import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const UserPage = () => {
  const [appusers, setAppusers] = useState([]);
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    type: '',
    password: ''
  });

  useEffect(() => {
    const userType = localStorage.getItem('userType');
    if (!userType || userType !== 'admin') {
      navigate('/login');
    } else {
      fetchData();
    }
  }, [navigate]);

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
      console.log('déco ok');
      localStorage.removeItem('userType');
      localStorage.removeItem('userName');
      navigate('/login');
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
      await api.createAppUser(newUser);
      fetchData();
      handleCloseModal();
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur:', error);
    }
  };

  return (
    <div className="container">
      <h1>Liste des appusers</h1>
      <button onClick={handleOpenModal}>Ajouter un utilisateur</button>
      <button onClick={handleLogout}>Déconnexion</button>
      <div>
        {appusers.map(appuser => (
          <div className="card" key={appuser.id_appuser}>
            <p><strong>ID de l'utilisateur :</strong> {appuser.id_appuser}</p>
            <p><strong>Nom de l'utilisateur :</strong> {appuser.name}</p>
            <p><strong>Type :</strong> {appuser.type}</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Ajouter un utilisateur"
        style={{ content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)' } }}
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
