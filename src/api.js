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
      const userType = localStorage.getItem('userType');
      const response = await fetch(`${BASE_URL}/appuser`, {
        headers: {
          'Content-Type': 'application/json',
          'User-Type': userType,
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

  createAppUser: async (user) => {
    const response = await fetch(`${BASE_URL}/appuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la création de l\'utilisateur');
    }

    return response.json();
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

  logout: async () => {
    try {
      await fetch(`${BASE_URL}/auth/logout`, {
          method: 'POST',
          credentials: 'include'
      });
      window.location.href = '/';
  } catch (error) {
      console.error('Error logging out:', error);
  }
  }
};

export default api;
