import { useState } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import Track from '../Track';
import { Container, List } from './styles';

const TracksList = () => {
	const tracks = useSelector((state) => state?.tracks?.list);

	const [player, setPlayer] = useState(null);

	const handlePlayTrack = useCallback((track) => {
		setPlayer(track);
	}, []);

	if (!tracks?.length) {
		return <span onClick={() => console.log(tracks)}>Lista vazia</span>;
	}

	return (
		<Container>
			<List>
				{tracks.map((track) => (
					<Track
						key={track?.id}
						data={track}
						playingId={player?.id}
						handlePlay={handlePlayTrack}
					/>
				))}
			</List>
		</Container>
	);
};

export default TracksList;
