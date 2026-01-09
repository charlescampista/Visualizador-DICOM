import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // URL base da sua API
  timeout: 60000, // opcional (60s)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;