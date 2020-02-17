import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  dateStringParserInYYYYMMDD,
  dateStringParserInHHMM,
} from '../../lib/dateStringParser';

const baseURL = 'http://localhost:4000/post';

const getPost = postId => {
  const request = axios.get(`${baseURL}/${postId}`);
  return request.then(response => response.data);
};

export const usePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [createdAt, setCreatedAt] = useState({
    YYYYMMDD: null,
    HHMM: null,
  });
  useEffect(() => {
    getPost(id).then(returnedData => {
      setPost(returnedData);
    });
  }, []);
  useEffect(() => {
    if (post) {
      setCreatedAt({
        YYYYMMDD: dateStringParserInYYYYMMDD(post.createdAt),
        HHMM: dateStringParserInHHMM(post.createdAt),
      });
    }
  }, [post]);
  const updatePost = postId => {
    getPost(postId).then(returnedData => {
      setPost(returnedData);
    });
  };
  return { post, createdAt, updatePost };
};
