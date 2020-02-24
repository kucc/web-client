import * as S from './styles';
import { useState, useEffect } from 'react';

interface PaginationProps {
  numberOfPosts: number;
  updatePage;
  postTypeId;
}

const Pagination: React.FC<PaginationProps> = ({
  numberOfPosts,
  updatePage,
  postTypeId,
}) => {
  const pagesArray = Array();
  const numberOfPages = Math.ceil(numberOfPosts / 10);
  const [page, setPage] = useState({
    start: 1,
    current: 1,
    end: 1,
  });
  for (let i = page.start; i < page.end + 1; i++) {
    pagesArray.push(i);
  }
  const PageButtons = pagesArray.map((button, i) => (
    <S.PageButton
      key={i}
      onClick={() => {
        setPage({ ...page, current: button });
      }}
      style={
        button == page.current
          ? { fontWeight: 'bold', backgroundColor: '#c93333', color: 'white' }
          : null
      }
    >
      {button}
    </S.PageButton>
  ));
  useEffect(() => {
    setPage({ ...page, end: numberOfPages < 5 ? numberOfPages : 5 });
  }, [numberOfPosts]);
  useEffect(() => {
    updatePage(page.current);
  }, [page.current]);
  useEffect(() => {
    setPage({
      ...page,
      current: 1,
    });
  }, [postTypeId]);
  return (
    <S.PaginationBar>
      <S.PageButton
        onClick={() => {
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
        }}
      >
        {'<'}
      </S.PageButton>
      {PageButtons}
      <S.PageButton
        onClick={() => {
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
        }}
      >
        {'>'}
      </S.PageButton>
    </S.PaginationBar>
  );
};

export default Pagination;
