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
};

export default api;