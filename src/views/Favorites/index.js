import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../features/counter/counterSlice';

import { Container } from './styles';

const Favorites = () => {
	const count = useSelector((state) => state?.counter?.value);
	const dispatch = useDispatch();

	return (
		<Container>
			<h1>Favorites List</h1>
			<p>Counter: {count}</p>

			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
		</Container>
	);
};

export default Favorites;
