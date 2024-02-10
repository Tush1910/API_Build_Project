import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api'; // Update with backend API base URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const userService = {
  listUsers: async (username = '') => {
    try {
      const response = await api.get(`/users?username=${username}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
  replaceUserFields: async (userId, userData) => {
    try {
      const response = await api.put(`/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error('Error replacing user fields:', error);
      throw error;
    }
  },
};

const clientService = {
  createClient: async (clientData) => {
    try {
      const response = await api.post('/clients', clientData);
      return response.data;
    } catch (error) {
      console.error('Error creating client:', error);
      throw error;
    }
  },
  changeClientField: async (clientId, field, value) => {
    try {
      const response = await api.patch(`/clients/${clientId}`, { [field]: value });
      return response.data;
    } catch (error) {
      console.error('Error changing client field:', error);
      throw error;
    }
  },
};

const companyService = {
  listCompanies: async () => {
    try {
      const response = await api.get('/companies');
      return response.data;
    } catch (error) {
      console.error('Error fetching companies:', error);
      throw error;
    }
  },
};

export { userService, clientService, companyService };
