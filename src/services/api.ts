import axios from 'axios';
import { BASE_URL_API } from '../Constants';

const api = axios.create({
  baseURL: BASE_URL_API, // URL base da sua API
  timeout: 60000, // opcional (60s)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;