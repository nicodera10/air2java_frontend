//loiacono_nicolas_adj_front/src/api.js
const BASE_URL = 'https://localhost:443';

const api = {

  getAllPersons: async () => {
    const response = await fetch(`${BASE_URL}/person`, {
      credentials: 'include'
    });
    return response.json();
  },

  getAllFestivals: async () => {
    const response = await fetch(`${BASE_URL}/festival`, {
      credentials: 'include'
    });
    return response.json();
  },

  getLatestFestivals: async () => {
    const response = await fetch(`${BASE_URL}/festival/latest`, {
      credentials: 'include'
    });
    return response.json();
  },

  getAllAppUsers: async () => {
    try {
      // Pas de manipulation du cookie, laissé au client pour gérer
      const response = await fetch(`${BASE_URL}/appuser`, {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
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
    const response = await fetch(`${BASE_URL}/band`, {
      credentials: 'include'
    });
    return response.json();
  },

  login: async (username, password) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include', // Ajout de l'option credentials
    });
    if (!response.ok) {
      throw new Error('Nom d\'utilisateur ou mot de passe incorrect');
    }
    const data = await response.json();
    return data;
  },
};

export default api;
