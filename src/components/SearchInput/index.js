import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { change } from '../../features/search/searchSlice';

import { Container, Input } from './styles';

const SearchInput = () => {
	const { value } = useSelector((state) => state?.search);

	const dispatch = useDispatch();
	const [search, setSearch] = useState(() => value || '');

	const onSubmit = useCallback(
		(event) => {
			event.preventDefault();

			dispatch(change(search));
		},
		[search, dispatch]
	);

	return (
		<Container onSubmit={onSubmit}>
			<Input
				placeholder='Pesquisar'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</Container>
	);
};

export default SearchInput;
