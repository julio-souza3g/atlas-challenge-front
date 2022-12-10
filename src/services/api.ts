import axios from 'axios';

const token = localStorage.getItem('@AtlasChallenge:token');

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    Authorization: token && token,
  },
});

export default api;