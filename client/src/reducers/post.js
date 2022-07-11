export default (post = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return [1,2];
    case "CREATE":
      return [...post, action.payload];
    case "DELETE":
      return post;
    case "UPDATE":
      return post;
    default:
      return post;
  }
}