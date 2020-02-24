// for fetching data
import axios from 'axios';
import { useState } from 'react';
import Post from '../../components/board/post';

const baseURL = 'http://localhost:4000/post';
const getPage = () => {
  const request = axios.get(`${baseURL}?type=NOTICE&page=1`);
  return request.then(response => response.data);
};
export const usePosts = () => {
  const initialPosts = getPage();
  const [posts, setPosts] = useState(initialPosts);
  const [totalPostsCount, setTotalPostsCount] = useState(null);
  return posts;
};
