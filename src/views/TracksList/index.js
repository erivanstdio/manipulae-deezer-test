import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import querystring from 'query-string';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addTracksToList } from '../../features/tracks/tracksSlice';

import List from '../../components/TracksList';
import { Container } from './styles';

const TracksList = () => {
	const dispatch = useDispatch();

	const { hash } = useLocation();
	const [fallback, setFallback] = useState({ fetchingTracks: true });

	const fetchTracks = useCallback(
		async (token) => {
			try {
				const endpoint = 'chart/tracks';
				// const endpoint = 'search?q=artist:"metallica"';
				const {
					data: { tracks },
				} = await axios.get(`http://localhost:3333?e=${endpoint}&token=${token}`);

				dispatch(addTracksToList(tracks?.data));
				setFallback((prev) => ({ ...prev, fetchingTracks: false }));
			} catch (error) {
				console.error(error);
			}
		},
		[dispatch]
	);

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
			<List />
		</Container>
	);
};

export default TracksList;
