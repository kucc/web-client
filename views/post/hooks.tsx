import { useState, useEffect } from 'react';
import axios from 'axios';

interface IPostObject {
  Id: number;
  title: string;
  content: string;
  userId: number;
  type: string;
  createdAt: string;
  views: number;
  statusCode?: number;
}

const baseURL = 'http://localhost:4000/post';

export const usePost = id => {
  const [postObject, setPostObject] = useState<IPostObject | undefined>(
    undefined,
  );
  const getPosts = async id => {
    const response = await axios.get(`${baseURL}/${id}`);
    const returnedPost = response.data;
    setPostObject(returnedPost);
  };
  useEffect(() => {
    getPosts(id);
  }, [id]);
  return { postObject };
};
