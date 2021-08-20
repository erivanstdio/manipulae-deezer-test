import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import querystring from 'query-string';
import { useLocation } from 'react-router-dom';

import api from '../../services/api';
import { Container } from './styles';

const Auth = () => {
	const [fallback, setFallback] = useState({ fetchingTracks: true });
	const [tracks, setTracks] = useState([]);
	const { hash } = useLocation();

	const fetchTracks = useCallback(async (token) => {
		try {
			const endpoint = 'chart/tracks';
			// const endpoint = 'search?q=artist:"metallica"';
			const {
				data: { tracks },
			} = await axios.get(`http://localhost:3333?e=${endpoint}&token=${token}`);

			setTracks(tracks.data);
			setFallback((prev) => ({ ...prev, fetchingTracks: false }));
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		const search = hash.replace('#', '?');
		const { access_token: token } = querystring.parse(search);

		fetchTracks(token);
	}, [hash, fetchTracks]);

	if (fallback.fetchingTracks) {
		return <h1>Loading...</h1>;
	}

	return (
		<Container>
			<ul>
				{tracks.map((track) => (
					<li key={track?.id}>
						<span>{track?.title}</span>
						<audio src={track?.preview} controls />
					</li>
				))}
			</ul>
		</Container>
	);
};

export default Auth;
