import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/action.js';

const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case DELETE:
      return posts.filter((post) => post._id !== action.payload._id);
    case UPDATE:
      return posts.map((post) => {
        if (post._id === action.payload._id) {
          post = { ...action.payload };
        }
      });
    default:
      return posts;
  }
};

export default reducer;
