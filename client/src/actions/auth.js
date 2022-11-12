// import * as api from '../api/index';
// import { AUTH } from '../constants/actionTypes';

const signUp = (userDetails, navigate) => async (dispatch) => {
  try {
    // const { data } = await api.createUser(newUser);
    // dispatch({ type: FETCH_ALL, payload: data });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

const signIn = (userCredentials, navigate) => async (dispatch) => {
  try {
    // const { data } = await api.createUser(newUser);
    // dispatch({ type: FETCH_ALL, payload: data });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export { signUp, signIn };
