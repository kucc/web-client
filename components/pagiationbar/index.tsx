import * as S from './styles';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface PaginationProps {
  numberOfPosts: number;
  updatePage;
}

const Pagination: React.FC<PaginationProps> = ({
  numberOfPosts,
  updatePage,
}) => {
  const numberOfPages = Math.ceil(numberOfPosts / 10);
  const pagesArray = Array();
  const [page, setPage] = useState({
    start: 1,
    current: 1,
    end: numberOfPages < 3 ? numberOfPages : 3,
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
  console.log(page);
  useEffect(() => {
    updatePage(page.current);
  }, [page.current]);
  return (
    <S.PaginationBar>
      <S.PageButton
        onClick={() => {
          if (page.start === 1) return alert('이전 페이지가 존재하지 않습니다');
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
          if (page.end === numberOfPages)
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
