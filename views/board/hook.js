// for fetching data
import axios from 'axios';

const baseURL = 'http://localhost:4000/post';

export const getPage = page => {
  const request = axios.get(`${baseURL}/?page=${page}`);
  return request.then(response => response.data);
};

export const getPost = postId => {
  const request = axios.get(`${baseURL}/${postId}`);
  return request.then(response => {
    console.log(response.data);
    return response.data;
  });
};
