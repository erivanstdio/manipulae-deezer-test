import { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import Track from '../Track';
import { Container, List, Player } from './styles';

const TracksList = () => {
	const tracks = useSelector((state) => state?.tracks?.list);

	const playerRef = useRef(null);
	const [player, setPlayer] = useState(null);

	const handlePlayTrack = useCallback(
		(track) => {
			if (player?.id === track?.id) {
				return setPlayer(null);
			}

			setPlayer(track);
		},
		[player]
	);

	useEffect(() => {
		if (player) {
			playerRef.current.src = player?.preview;
			playerRef.current.play();
		} else {
			playerRef.current.pause();
		}
	}, [player]);

	if (!tracks?.length) {
		return <span onClick={() => console.log(tracks)}>Lista vazia</span>;
	}

	return (
		<Container>
			<Player ref={playerRef} />
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
