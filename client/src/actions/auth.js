import * as api from '../api/index';
import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes.js';

const createUser = (newUser) => async (dispatch) => {
  try {
    const { data } = await api.createUser(newUser);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export { createUser };
