import axios from 'axios';

/**
 * Trocar baseURL pelo ip apresentado no expo
 */
const api = axios.create({
  baseURL: 'http://10.0.0.110:3333/',
});


export default api;
