import Cookies from 'js-cookie'; // Importez la bibliothèque js-cookie

const BASE_URL = 'http://localhost:3000';

const api = {
  getAllPersons: async () => {
    const response = await fetch(`${BASE_URL}/person`);
    return response.json()
  },

  getAllFestivals: async () => {
    const response = await fetch(`${BASE_URL}/festival`);
    return response.json()
  },

  getAllAppUsers: async () => {
    try {
      const token = Cookies.get('token'); // Utilisez Cookies.get() pour récupérer le token
      if (!token) {
        throw new Error('Utilisateur non connecté');
      }
      
      const response = await fetch(`${BASE_URL}/appuser`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des utilisateurs de l\'application');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs de l\'application:', error);
      throw error;
    }
  },

  getAllBands: async () => {
    const response = await fetch(`${BASE_URL}/band`);
    return response.json()
  },

  login: async (username, password) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      throw new Error('Nom d\'utilisateur ou mot de passe incorrect');
    }
    console.log('connexion ok');
    const data = await response.json();
    return data;
  },

};

export default api;
