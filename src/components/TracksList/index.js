import { useSelector } from 'react-redux';
import { Container } from './styles';

const TracksList = () => {
	const tracks = useSelector((state) => state?.tracks?.list);

	if (!tracks?.length) {
		return <span onClick={() => console.log(tracks)}>Lista vazia</span>;
	}

	return (
		<Container>
			{tracks.map((track, i) => (
				<li key={i}>
					<span>{track?.title}</span>
					<audio src={track?.preview} controls />
				</li>
			))}
		</Container>
	);
};

export default TracksList;
