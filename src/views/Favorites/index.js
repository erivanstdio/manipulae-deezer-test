import { useSelector } from 'react-redux';

import TracksList from '../../components/TracksList';
import { Container } from './styles';

const Favorites = () => {
	const favorites = useSelector((state) => state?.tracks?.favorites);

	if (!favorites?.length) {
		return <span>Sem favoritos</span>;
	}

	return (
		<Container>
			<TracksList getFromFavorites />
		</Container>
	);
};

export default Favorites;
