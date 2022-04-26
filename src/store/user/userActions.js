import { userActions } from './userSlice';

export const { setUsername } = userActions;

export const createUsername = (data) => (dispatch) => {
  dispatch(setUsername(data));
};
