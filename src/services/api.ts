import axios from 'axios';

const token = localStorage.getItem('@AtlasChallenge:token');

const api = axios.create({
  baseURL: 'https://atlas-challenge-back-production.up.railway.app',
  headers: {
    Authorization: token && token,
  },
});

export default api;