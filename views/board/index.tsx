import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import { faSearch, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import * as S from './styles';

import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
import BoardNavigation from '../../components/board/board-navigation';
import Posts from '../../components/board/posts';
import { redirect } from '../../lib/auth';
import usePosts from '../../components/board/posts/hooks';
import Pagination from '../../components/board/pagiation-bar';

interface BoardProps {
  initialPosts;
  rest;
  postTypeId;
}

const Board: NextPage<BoardProps> = ({ initialPosts, postTypeId, rest }) => {
  const [searchField, setSearchField] = useState('');
  const [posts, setPosts] = useState(initialPosts);
  const handleChange = e => {
    setSearchField(e.target.value);
  };
  const postTypeObject = {
    FREE: '자유게시판',
    NOTICE: '공지',
    ALUMNI: '교우게시판',
  };
  const { updatePage, updatedPosts, totalPostsCount } = usePosts({
    initialPosts,
    postTypeId,
  });
  useEffect(() => {
    setPosts(updatedPosts);
  }, [updatedPosts]);
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
                    Home > Board > {postTypeTitle}
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
                  <Posts initialPosts={posts} postTypeId={postTypeId} />
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
                numberOfPosts={totalPostsCount}
                updatePage={updatePage}
                postTypeId={postTypeId}
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
  // if (!isLoggedIn) {
  //   redirect(res, '/');
  // }
  return { initialPosts, postTypeId, rest };
};

export default Board;
