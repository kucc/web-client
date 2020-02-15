import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
import { usePost } from './hooks';
import Pagination from '../../components/board/pagiationbar';
import BoardNavigation from '../../components/board/boardnavigation';

const Board: React.FC = () => {
  const { totalPostsCount, updatePage, postsPerPage } = usePost();
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
                  {postsPerPage}
                </S.BoardContent>
              </Col>
            </S.BoardContainer>
          </Row>
        </Grid>
        <Pagination numberOfPosts={totalPostsCount} updatePage={updatePage} />
      </S.Board>
    </Layout>
  );
};

export default Board;
