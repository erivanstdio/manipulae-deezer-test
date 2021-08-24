import axios from 'axios';

const backendUrl = 'http://localhost:3333';
const deezerApiUrl = 'https://api.deezer.com';

const api = {
	dz: axios.create({ baseURL: deezerApiUrl }), // deezer api
	be: axios.create({ baseURL: backendUrl }), // backend api
};

export default api;
