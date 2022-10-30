import { FETCH_ALL, CREATE, DELETE } from '../constants/action.js';

const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return posts;
    case CREATE:
      return posts;
    case DELETE:
      return posts;
    default:
      return posts;
  }
};

export default reducer;
