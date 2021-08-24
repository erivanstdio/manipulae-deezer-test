import { configureStore } from '@reduxjs/toolkit';

import tracksReducer from '../features/tracks/tracksSlice';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		tracks: tracksReducer,
	},
});
