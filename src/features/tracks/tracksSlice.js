import { createSlice } from '@reduxjs/toolkit';

export const tracksSlice = createSlice({
	name: 'tracks',
	initialState: {
		list: [],
		favorites: [],
	},
	reducers: {
		clearList: (state) => {
			state.list = [];
		},
		addTracksToList: (state, action) => {
			state.list = [...state.list, ...action.payload];
		},
		addTrackToFavorites: (state, action) => {
			state.favorites = [...state.favorites, action.payload];
		},
	},
});

export const { addTracksToList, addTrackToFavorites, clearList } = tracksSlice.actions;

export default tracksSlice.reducer;
