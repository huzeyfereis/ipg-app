import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'Users',
  initialState: {
    username: '',
    isLoading: false,
  },
  reducers: {
    setUsername(state, action) {
      state.isLoading = true;
      state.username = action.payload;
      state.isLoading = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
