const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
	try {
		const { e, q = '', token } = req.query;
		const apiUrl = 'https://api.deezer.com';

		const URI = `${apiUrl}/${e}?access_token=${token}`;

        console.log(URI);

		const { data } = await axios.default.get(URI);

		return res.json(data);
	} catch (error) {
		console.error(error.message);

		return res.json(error);
	}
});

app.listen(3333, () => console.log('Backend on'));
