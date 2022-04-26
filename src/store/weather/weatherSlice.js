import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'Weather',
  initialState: {
    isLoading: false,
    cityImage: '',
    currentWeather: {},
    favoriteCities: [],
  },
  reducers: {
    setCurrentWeather(state, action) {
      state.isLoading = true;
      state.currentWeather = action.payload;
      state.isLoading = false;
    },
    setCityImage(state, action) {
      state.isLoading = true;
      state.cityImage = action.payload;
      state.isLoading = false;
    },
    addFavoriteCity(state, action) {
      state.isLoading = true;
      state.favoriteCities = state.favoriteCities.concat([action.payload]);
      state.isLoading = false;
    },
    removeFavoriteCity(state, action) {
      state.isLoading = true;
      state.favoriteCities = action.payload;
      state.isLoading = false;
    },
  },
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice;
