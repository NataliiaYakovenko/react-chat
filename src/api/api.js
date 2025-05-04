export const getMessages = () => {
  return fetch("https://dummyjson.com/comments")
  .then((response) =>response.json());
};
