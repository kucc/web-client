import * as S from './styles';
import { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
import { useRouter } from 'next/router';
import axios from 'axios';
import Pagination from '../../components/pagiationbar';

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

// for fetching data
const baseURL = 'http://localhost:4000/post';
const getPage = page => {
  const request = axios.get(`${baseURL}/?page=${page}`);
  return request.then(response => response.data);
};

const Board: React.FC = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<Array<any> | null>([]);
  const [numberOfPosts, setNumberOfPosts] = useState(null);
  const updatePage = id => {
    getPage(id).then(returnedData => {
      setPosts(returnedData.data);
      setNumberOfPosts(returnedData.count);
    });
  };
  const showPost =
    posts &&
    posts.map((post, i) => {
      return (
        <S.BoardPost key={i} onClick={() => getPage(post.id)}>
          <S.BoardIndexAuthor>{post.userId}</S.BoardIndexAuthor>
          <S.BoardIndexTitle>{post.title}</S.BoardIndexTitle>
          <S.BoardIndexLikes>{post.likes}</S.BoardIndexLikes>
          <S.BoardIndexDate>{post.createdAt.substring(0, 10)}</S.BoardIndexDate>
          <S.BoardIndexViews>{post.views}</S.BoardIndexViews>
        </S.BoardPost>
      );
    });
  useEffect(() => {
    getPage(1).then(returnedData => setPosts(returnedData.data));
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
              </Col>
            </S.BoardContainer>
          </Row>
        </Grid>
        <Pagination numberOfPosts={numberOfPosts} updatePage={updatePage} />
      </S.Board>
    </Layout>
  );
};

export default Board;
