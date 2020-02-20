import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
import BoardNavigation from '../../components/board/board-navigation';
import { NextPage } from 'next';
import Posts from '../../components/board/posts';
import fetch from 'isomorphic-unfetch';

interface BoardProps {
  data?: Object;
  rest?: Object;
  isLoggedIn?: any;
}

const Board: NextPage<BoardProps> = ({ data, isLoggedIn, rest }) => {
  console.log(data);
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
                  <Posts initialPosts={data} />
                </S.BoardContent>
              </Col>
            </S.BoardContainer>
          </Row>
        </Grid>
      </S.Board>
    </Layout>
  );
};

Board.getInitialProps = async ({ req, res, isLoggedIn, ...rest }) => {
  console.log('initialprops');
  const response = await fetch(`http://localhost:4000/post?page=1`);
  const data = await response.json();
  return { data, isLoggedIn, rest };
};

export default Board;
