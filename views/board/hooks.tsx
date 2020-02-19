// for fetching data
import axios from 'axios';
import { useState, useEffect } from 'react';
import Post from '../../components/board/post';

const baseURL = 'http://localhost:4000/post';
const getPage = page => {
  const request = axios.get(`${baseURL}?page=${page}`);
  return request.then(response => response.data);
};

export const usePosts = () => {
  const [posts, setPosts] = useState(null);
  const [totalPostsCount, setTotalPostsCount] = useState(null);
  const updatePage = id => {
    getPage(id).then(returnedData => {
      setPosts(returnedData.data);
    });
  };
  const getPost = postId => {
    const request = axios.get(`${baseURL}/${postId}`);
    return request.then(response => {
      return response.data;
    });
  };
  const postsPerPage =
    posts &&
    posts.map((post, i) => <Post getPost={getPost} post={post} key={i} />);
  return {
    posts,
    totalPostsCount,
    updatePage,
    postsPerPage,
  };
};
