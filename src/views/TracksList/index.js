import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import querystring from 'query-string';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addTracksToList, clearList } from '../../features/tracks/tracksSlice';

import List from '../../components/TracksList';
import SearchInput from '../../components/SearchInput';
import { Container } from './styles';

const TracksList = () => {
	const dispatch = useDispatch();

	const { hash } = useLocation();
	const search = useSelector((state) => state?.search?.value);
	const [fallback, setFallback] = useState({ fetchingTracks: true });

	const fetchTracks = useCallback(
		async (token, search) => {
			try {
				setFallback((prev) => ({ ...prev, fetchingTracks: true }));

				const headers = { token, search };
				const { data } = await axios.get(`http://localhost:3333`, { headers });

				const tracks = search ? data : data?.tracks;

				dispatch(clearList());
				dispatch(addTracksToList(tracks?.data));
				setFallback((prev) => ({ ...prev, fetchingTracks: false }));
			} catch (error) {
				console.error(error);
			}
		},
		[dispatch]
	);

	useEffect(() => {
		const query = hash.replace('#', '?');
		const { access_token: token } = querystring.parse(query);

		fetchTracks(token, search);
	}, [hash, search, fetchTracks]);

	if (fallback.fetchingTracks) {
		return <h1>Loading...</h1>;
	}

	return (
		<Container>
			<SearchInput />
			<List />
		</Container>
	);
};

export default TracksList;
