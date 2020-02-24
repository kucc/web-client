import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import { faSearch, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Link from 'next/link';
import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
import BoardNavigation from '../../components/board/board-navigation';
import Posts from '../../components/board/posts';
import { redirect } from '../../lib/auth';
interface BoardProps {
  data;
  rest;
  postTypeId;
}

const Board: NextPage<BoardProps> = ({ data, postTypeId, rest }) => {
  const [searchField, setSearchField] = useState('');
  const handleChange = e => {
    setSearchField(e.target.value);
  };
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
                  <Posts initialPosts={data} postTypeId={postTypeId} />
                </S.BoardContent>
              </Col>
            </S.BoardContainer>
          </Row>
          <Row>
            <Col span={4} offset={4} pad={3}>
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
            <Col span={2} offset={2}>
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
  const data = await response.json();
  // if (!isLoggedIn) {
  //   redirect(res, '/');
  // }
  return { data, postTypeId, rest };
};

export default Board;
