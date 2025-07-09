import axios from 'axios';

const api = axios.create({
  baseURL: 'https://velochat-backend-restful-apis-production.up.railway.app',
});

export default api;
