import axios from 'axios';

const deezerApiUrl = 'https://api.deezer.com';
const api = axios.create({ baseURL: deezerApiUrl });

export default api;
