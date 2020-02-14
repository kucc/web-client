import * as S from './styles';
import { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
import Pagination from '../../components/pagiationbar';
import Post from '../../components/post';
import { getPage, getPost } from './hook';

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
      return <Post getPost={getPost} post={post} key={i} />;
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
