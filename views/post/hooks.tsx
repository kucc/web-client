import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  dateStringParserInYYYYMMDD,
  dateStringParserInHHMM,
} from '../../lib/dateStringParser';

const baseURL = 'http://localhost:4000/post';

const getPost = id => {
  const request = axios.get(`${baseURL}/${id}`);
  return request.then(response => response.data);
};

export const usePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPosts] = useState(null);
  const [createdAt, setCreatedAt] = useState({
    YYYYMMDD: null,
    HHMM: null,
  });
  console.log(post, 'post');
  useEffect(() => {
    getPost(id).then(returnedData => {
      setPosts(returnedData);
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
  return { post, createdAt };
};
