import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  parseDateStringIntoYYMMDD,
  parseDateStringIntoHHMM,
} from '../../lib/dateStringParser';

const baseURL = 'http://localhost:4000/post';

const getPost = postId => {
  const request = axios.get(`${baseURL}/${postId}`);
  return request.then(response => response.data);
};

export const usePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [postObject, setPostObject] = useState(null);

  useEffect(() => {
    getPost(id).then(returnedData => {
      setPostObject(returnedData);
    });
  }, []);
  return { postObject };
};
