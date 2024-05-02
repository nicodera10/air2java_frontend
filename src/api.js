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
    const response = await fetch(`${BASE_URL}/appuser`);
    return response.json()
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
    return response.json();
  },

};

export default api;