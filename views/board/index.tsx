import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
import Link from 'next/link';
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

const baseURL = 'http://localhost:4000/post';

const getPage = page => {
  const request = axios.get(`${baseURL}/?page=${page}`);
  return request
    .then(response => response.data)
    .then(responseData => responseData.data);
};

// dummies
const BoardMenuList = ['공지', '자유게시판', '교우게시판'];

const BoardNavItems = BoardMenuList.map((Item, i) => (
  <li key={i}>
    <S.BoardNavItem>
      <S.BoardBullet />
      {Item}
    </S.BoardNavItem>
  </li>
));

const Board: React.FC = () => {
  const [posts, setPosts] = useState<Array<any> | null>([]);
  const showPost =
    posts &&
    posts.map(post => {
      return (
        <S.BoardPost>
          <S.BoardIndexAuthor>{post.userId}</S.BoardIndexAuthor>
          <S.BoardIndexTitle>{post.title}</S.BoardIndexTitle>
          <S.BoardIndexLikes>{post.likes}</S.BoardIndexLikes>
          <S.BoardIndexDate>{post.createdAt.substring(0, 10)}</S.BoardIndexDate>
          <S.BoardIndexViews>{post.views}</S.BoardIndexViews>
        </S.BoardPost>
      );
    });
  useEffect(() => {
    getPage(1).then(returnedData => setPosts(returnedData));
  }, []);
  return (
    <Layout>
      <S.Board>
        <Grid>
          <Row>
            <S.BoardContainer>
              <Col span={2}>
                <S.BoardNavbar>
                  <h2>{BoardNavItems}</h2>
                </S.BoardNavbar>
              </Col>
              <Col span={10}>
                <S.BoardMenu>
                  <S.BoardMenuTitle>공지</S.BoardMenuTitle>
                  <S.BoardMenuHistory>
                    Home > Board > NoticeBoard
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
                  {showPost}
                </S.BoardContent>
                <S.BoardPagination>1 | 2 | 3 | 4</S.BoardPagination>
              </Col>
            </S.BoardContainer>
          </Row>
        </Grid>
      </S.Board>
    </Layout>
  );
};

export default Board;
