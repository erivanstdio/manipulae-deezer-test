import { useSelector, useDispatch } from 'react-redux';

import { addTrackToFavorites, removeTrackFromFavorites } from '../../features/tracks/tracksSlice';
import {
	Container,
	TrackInfo,
	Cover,
	PlayPauseButton,
	Actions,
	FavButton,
	Duration,
} from './styles';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaPlay, FaPause } from 'react-icons/fa';
import { useCallback, useMemo } from 'react';

const Track = ({ data, playingId, handlePlay }) => {
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state?.tracks?.favorites);

	const isFavorited = useMemo(() => {
		return favorites.find((favorited) => favorited?.id === data?.id);
	}, [favorites, data]);

	const parseNumberToTimestamp = useCallback((input) => {
		try {
			if (!input || typeof input !== 'number') {
				return '--:--';
			}

			let [minutes = '0', seconds = '0'] = String(input / 60).split('.');

			seconds = Number(
				seconds.length >= 2 ? `0.${seconds[0]}${seconds[1]}` : `0${seconds[0]}`
			);
			seconds = Math.floor(seconds * 60);

			if (Number(minutes) >= 0) {
				minutes = Math.floor(Number(minutes) % 60);
			}

			minutes = String(minutes).length === 1 ? `0${minutes}` : minutes;
			seconds = String(seconds).length === 1 ? `0${seconds}` : seconds;

			minutes = String(minutes).substr(0, 2);
			seconds = String(seconds).substr(0, 2);

			return `${minutes}:${seconds}`;
		} catch (error) {
			console.error(`Invalid input provided: ${input}`);

			return '--:--:--';
		}
	}, []);

	return (
		<Container>
			<TrackInfo>
				<Cover src={data?.album?.cover} />
				<div className='meta'>
					<a href={data?.link} target='_blank' rel='noreferrer'>
						{data?.title_short}
					</a>
					<span onClick={() => console.log(data)}>{data?.artist?.name}</span>
				</div>
			</TrackInfo>

			<Actions>
				<Duration>{parseNumberToTimestamp(data?.duration)}</Duration>

				<FavButton
					isFavorited={isFavorited}
					onClick={() => {
						if (isFavorited) {
							dispatch(removeTrackFromFavorites(data));
						} else {
							dispatch(addTrackToFavorites(data));
						}
					}}>
					{isFavorited ? <AiFillHeart /> : <AiOutlineHeart />}
				</FavButton>
				<PlayPauseButton
					isPlaying={playingId === data?.id}
					onClick={() => handlePlay(data)}>
					{playingId === data?.id ? (
						<FaPause style={{ marginRight: '-2px' }} />
					) : (
						<FaPlay style={{ marginRight: '-4px' }} />
					)}
				</PlayPauseButton>
			</Actions>
		</Container>
	);
};

export default Track;
