import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
import Link from 'next/link';

// dummies
const BoardMenuList = ['공지', '자유게시판', '교우게시판'];
const BoardPostList = [
  {
    id: 1,
    author: 'Author1',
    title: 'Post1',
    likes: 100,
    date: new Date(),
    views: 1000,
  },
  {
    id: 2,
    author: 'Author2',
    title: 'Post2',
    likes: 200,
    date: new Date(),
    views: 2000,
  },
  {
    id: 3,
    author: 'Author3',
    title: 'Post3',
    likes: 300,
    date: new Date(),
    views: 3000,
  },
];

const BoardPost = BoardPostList.map(Post => {
  return <div>{Post.id + Post.author + Post.title}</div>;
});

const BoardNavItems = BoardMenuList.map((Item, i) => (
  <li key={i}>
    <S.BoardNavItem>
      <S.BoardBullet />
      {Item}
    </S.BoardNavItem>
  </li>
));
const Board: React.FC = () => {
  return (
    <Layout>
      <S.Board>
        <S.BoardContainer>
          <Grid>
            <Row>
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
                <S.BoardContent>{BoardPost}</S.BoardContent>
              </Col>
            </Row>
          </Grid>
        </S.BoardContainer>
      </S.Board>
    </Layout>
  );
};

export default Board;
