import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import { faSearch, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
import BoardNavigation from '../../components/board/board-navigation';
import { redirect } from '../../lib/auth';
import { useSearchInput, usePosts } from './hooks';
import Pagination from '../../components/board/pagiation';
import Post from '../../components/board/post';

interface BoardProps {
  initialPosts;
  rest;
  postTypeId;
}

const Board: NextPage<BoardProps> = ({ initialPosts, postTypeId, rest }) => {
  const postTypeObject = {
    FREE: '자유게시판',
    NOTICE: '공지',
    ALUMNI: '교우게시판',
  };
  const { searchField, handleChange } = useSearchInput();
  const {
    page,
    posts,
    setCurrentPage,
    increasePageHandler,
    decreasePageHandler,
  } = usePosts({
    initialPosts,
    postTypeId,
  });
  const postTypeTitle = postTypeObject[postTypeId];
  return (
    <Layout>
      <S.Board>
        <Grid>
          <Row>
            <S.BoardContainer>
              <Col span={2}>
                <S.BoardNavbar>
                  <BoardNavigation />
                </S.BoardNavbar>
              </Col>
              <Col span={10}>
                <S.BoardMenu>
                  <S.BoardMenuTitle>{postTypeTitle}</S.BoardMenuTitle>
                  <S.BoardMenuHistory>
                    Home > Board >{' '}
                    <span style={{ fontWeight: 'bold', color: '#c93333' }}>
                      {postTypeTitle}
                    </span>
                  </S.BoardMenuHistory>
                </S.BoardMenu>
                <S.BoardContent>
                  <S.BoardIndex>
                    <S.BoardIndexAuthor>작성자</S.BoardIndexAuthor>
                    <S.BoardIndexTitle>제목</S.BoardIndexTitle>
                    <S.BoardIndexLikes>좋아요</S.BoardIndexLikes>
                    <S.BoardIndexDate>작성일</S.BoardIndexDate>
                    <S.BoardIndexViews>조회수</S.BoardIndexViews>
                  </S.BoardIndex>
                  {posts.map((post, i) => (
                    <Post post={post} key={i} />
                  ))}
                </S.BoardContent>
              </Col>
            </S.BoardContainer>
          </Row>
          <Row>
            <Col span={4} offset={5}>
              <S.BoardSearchContainer>
                <S.BoardSearchInputContainer>
                  <FontAwesomeIcon icon={faSearch} size="2x" />
                  <S.BoardSearchInput
                    placeholder="검색어를 입력해주세요"
                    onChange={handleChange}
                    value={searchField}
                  />
                </S.BoardSearchInputContainer>
                <S.BoardSearchButton>Search</S.BoardSearchButton>
              </S.BoardSearchContainer>
            </Col>
            <Col span={2} offset={1}>
              <Link href={{ pathname: '/board/newPost' }} as={`/board/newPost`}>
                <S.BoardNewPostButton>
                  <span style={{ marginRight: '1rem' }}>
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                  새 글 쓰기
                </S.BoardNewPostButton>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col span={10} offset={2}>
              <Pagination
                page={page}
                setCurrentPage={setCurrentPage}
                increasePageHandler={increasePageHandler}
                decreasePageHandler={decreasePageHandler}
              />
            </Col>
          </Row>
        </Grid>
      </S.Board>
    </Layout>
  );
};

Board.getInitialProps = async ({ req, res, query, isLoggedIn, ...rest }) => {
  const postTypeId = query.postTypeId ? query.postTypeId : 'NOTICE';
  const response = await fetch(
    `http://localhost:4000/post?type=${postTypeId}&page=1`,
  );
  const initialPosts = await response.json();
  // if (
  //   !isLoggedIn &&
  //   (query.postTypeId === 'ALUMNI' || query.postTypeId === 'FREE')
  // ) {
  //   alert('로그인이 필요한 페이지입니다!');
  //   redirect(res, '/');
  // }
  return { initialPosts, postTypeId, rest };
};

export default Board;
