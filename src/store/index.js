import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user/userSlice';
import weatherReducer from './weather/weatherSlice';

export const store = configureStore({
  reducer: {
    user: userReducer.reducer,
    weather: weatherReducer.reducer,
  },
});
