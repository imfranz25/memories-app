const reducer = (post = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return post;
    case "CREATE":
      return post;
    case "DELETE":
      return post;
    case "UPDATE":
      return post;
    default:
      break;
  }
}