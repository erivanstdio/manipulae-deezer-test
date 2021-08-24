import { configureStore } from '@reduxjs/toolkit';

import searchReducer from '../features/search/searchSlice';
import tracksReducer from '../features/tracks/tracksSlice';

export default configureStore({
	reducer: {
		tracks: tracksReducer,
		search: searchReducer,
	},
});
