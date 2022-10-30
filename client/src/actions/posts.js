import * as api from '../api/index';

const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    dispatch({ type: 'FETCH_ALL', data });
  } catch (error) {
    console.log(error.message);
  }
};

export { getPosts };
