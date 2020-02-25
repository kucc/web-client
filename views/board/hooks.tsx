// for fetching data
import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = 'http://localhost:4000/post';

const getPage = (postTypeId, pageId) => {
  const request = axios.get(`${baseURL}?type=${postTypeId}&page=${pageId}`);
  const returnedData = request.then(response => response.data);
  return returnedData;
};

const calculatedPages = numberOfPosts => {
  return Math.ceil(numberOfPosts / 10);
};

export const usePosts = ({ initialPosts, postTypeId }) => {
  const { count, data } = initialPosts;
  const [posts, setPosts] = useState(data);
  const [numberOfPages, setNumberOfPages] = useState(calculatedPages(count));
  const [page, setPage] = useState({
    start: 1,
    current: 1,
    end: numberOfPages < 5 ? numberOfPages : 5,
  });

  const updatePaginationBarButton = () => {
    setPage({
      start: 1,
      current: 1,
      end: numberOfPages < 5 ? numberOfPages : 5,
    });
  };

  const updateCurrentPage = async pageId => {
    const returnedData = await getPage(postTypeId, pageId);
    setPosts(returnedData.data);
  };

  const setCurrentPage = button => {
    setPage({ ...page, current: button });
  };

  const increasePageHandler = () => {
    if (page.end === numberOfPages && page.current === page.end)
      return alert('다음 페이지가 존재하지 않습니다');
    if (page.current < page.end) {
      setPage({
        ...page,
        current: page.current + 1,
      });
    } else {
      setPage({
        ...page,
        start: page.start + 1,
        current: page.current + 1,
        end: page.end + 1,
      });
    }
  };

  const decreasePageHandler = () => {
    if (page.start === 1 && page.current === 1)
      return alert('이전 페이지가 존재하지 않습니다');
    if (page.current > page.start) {
      setPage({
        ...page,
        current: page.current - 1,
      });
    } else {
      setPage({
        ...page,
        start: page.start - 1,
        current: page.current - 1,
        end: page.end - 1,
      });
    }
  };

  useEffect(() => {
    setPosts(data);
    setNumberOfPages(calculatedPages(count));
  }, [initialPosts]);

  useEffect(() => {
    updatePaginationBarButton();
  }, [numberOfPages]);

  useEffect(() => {
    updateCurrentPage(page.current);
  }, [page.current]);

  return {
    posts,
    page,
    setCurrentPage,
    increasePageHandler,
    decreasePageHandler,
  };
};

export const useSearchInput = () => {
  let [searchField, setSearchField] = useState('');
  const handleChange = e => {
    setSearchField(e.target.value);
  };

  return { searchField, handleChange };
};
