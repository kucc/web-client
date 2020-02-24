import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = 'http://localhost:4000/post';

const usePosts = ({ initialPosts, postTypeId }) => {
  const [updatedPosts, setUpdatedPosts] = useState(initialPosts);
  const [totalPostsCount, setTotalPostsCount] = useState(initialPosts.count);
  const getPage = page => {
    const request = axios.get(`${baseURL}?type=${postTypeId}&page=${page}`);
    return request.then(response => response);
  };
  const updatePage = id => {
    console.log('updatePage!!');
    getPage(id).then(returnedData => {
      setUpdatedPosts(returnedData.data);
    });
  };
  useEffect(() => {
    setUpdatedPosts(initialPosts);
  }, [initialPosts]);
  useEffect(() => {
    setTotalPostsCount(initialPosts.count);
  }, [initialPosts]);
  return { updatePage, updatedPosts, totalPostsCount };
};

export default usePosts;
