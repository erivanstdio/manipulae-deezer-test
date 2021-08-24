const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
	try {
		const { search, token } = req.headers;

		const apiUrl = 'https://api.deezer.com';
		const URI = search
			? `${apiUrl}/search?q=artist:"${search}"&access_token=${token}`
			: `${apiUrl}/chart/tracks`;

		const { data } = await axios.default.get(URI);

		return res.json(data);
	} catch (error) {
		console.error(error.message);

		return res.json(error);
	}
});

app.listen(3333, () => console.log('Backend on'));
