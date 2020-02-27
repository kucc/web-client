// for fetching data
import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = 'http://localhost:4000/post';

export const usePosts = ({ initialPosts, postTypeId }) => {
  const calculateNumberOfPage = numberOfPosts => {
    return Math.ceil(numberOfPosts / 10);
  };
  const numberOfPages = calculateNumberOfPage(initialPosts.count);
  const [page, setPage] = useState({
    start: 1,
    current: 1,
    end: numberOfPages,
  });
  const [posts, setPosts] = useState(initialPosts.data);

  if (numberOfPages !== page.end) {
    setPage({ ...page, start: 1, current: 1, end: numberOfPages });
  }

  const getPosts = async (postTypeId, pageId) => {
    const response = await axios.get(
      `${baseURL}?type=${postTypeId}&page=${pageId}`,
    );
    const returnedPosts = response.data;
    return returnedPosts;
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
    getPosts(postTypeId, page.current).then(returnedPosts =>
      setPosts(returnedPosts.data),
    );
  }, [initialPosts, page]);

  return {
    page,
    posts,
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
