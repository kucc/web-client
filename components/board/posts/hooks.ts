import axios from 'axios';
import { useState } from 'react';

const baseURL = 'http://localhost:4000/post';

const usePosts = initialPosts => {
  const [posts, setPosts] = useState(initialPosts);

  const [totalPostsCount, setTotalPostsCount] = useState(initialPosts.count);

  const getPage = page => {
    const request = axios.get(`${baseURL}?page=${page}`);
    return request.then(response => response);
  };

  const updatePage = id => {
    getPage(id).then(returnedData => {
      setPosts(returnedData.data);
    });
  };

  return { updatePage, posts, totalPostsCount };
};

export default usePosts;