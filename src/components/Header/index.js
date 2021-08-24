import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header = () => (
	<Container>
		<Link className={window.location.pathname === '/tracks' ? 'selected' : ''} to='/tracks'>
			Lista de músicas
		</Link>

		<Link
			to='/favorites'
			className={window.location.pathname === '/favorites' ? 'selected' : ''}>
			Favoritos
		</Link>
	</Container>
);

export default Header;
