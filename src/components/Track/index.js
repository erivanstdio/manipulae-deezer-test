import { Container, TrackInfo, Cover, PlayPauseButton } from './styles';

import { FaPlay, FaPause } from 'react-icons/fa';

const Track = ({ data, playingId, handlePlay }) => {
	return (
		<Container>
			<TrackInfo>
				<Cover src={data?.album?.cover} />
				<div className='meta'>
					<p>{data?.title}</p>
					<span>{data?.artist?.name}</span>
				</div>
			</TrackInfo>
			<PlayPauseButton isPlaying={playingId === data?.id} onClick={() => handlePlay(data)}>
				{playingId === data?.id ? (
					<FaPause style={{ marginRight: '-2px' }} />
				) : (
					<FaPlay style={{ marginRight: '-4px' }} />
				)}
			</PlayPauseButton>
		</Container>
	);
};

export default Track;
