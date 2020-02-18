import axios from 'axios';
import { useState } from 'react';

const baseURL = 'http://localhost:4000/post';

const usePosts = initialPosts => {
  const [posts, setPosts] = useState(initialPosts);
  const [totalPostsCount, setTotalPostsCount] = useState(initialPosts.count);
  const getPost = postId => {
    const request = axios.get(`${baseURL}/${postId}`);
    return request.then(response => {
      return response.data;
    });
  };
  const getPage = page => {
    const request = axios.get(`${baseURL}/?page=${page}`);
    return request.then(response => response);
  };
  const updatePage = id => {
    getPage(id).then(returnedData => {
      setPosts(returnedData.data);
    });
  };

  return { getPost, updatePage, posts, totalPostsCount };
};

export default usePosts;
