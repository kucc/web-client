import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = 'http://localhost:4000/post';

const usePosts = ({ initialPosts, postTypeId }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [totalPostsCount, setTotalPostsCount] = useState(initialPosts.count);
  const getPage = page => {
    const request = axios.get(`${baseURL}?type=${postTypeId}&page=${page}`);
    return request.then(response => response);
  };
  const updatePage = id => {
    getPage(id).then(returnedData => {
      setPosts(returnedData.data);
    });
  };
  useEffect(() => {
    setPosts(initialPosts);
  }, [initialPosts]);
  useEffect(() => {
    setTotalPostsCount(initialPosts.count);
  }, [initialPosts]);
  return { updatePage, posts, totalPostsCount };
};

export default usePosts;
