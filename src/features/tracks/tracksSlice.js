import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'tracks',
	initialState: {
		list: [],
		favorites: [],
	},
	reducers: {
		addTracksToList: (state, action) => {
			state.list = [...state.list, ...action.payload];
		},
		addTrackToFavorites: (state, action) => {
			state.favorites = [...state.favorites, action.payload];
		},
	},
});

export const { addTracksToList, addTrackToFavorites } = counterSlice.actions;

export default counterSlice.reducer;
