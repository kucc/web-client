import { useRef } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
// import { faSearch, faPen } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MyEditor from '../../components/editor';
import * as S from './styles';
import Layout from '../../components/layout';
import BoardNavigation from '../../components/board/board-navigation';
import { Grid, Row, Col } from '../../components/grid/styles';

const newPost: NextPage = () => {
  const Editor = dynamic(import('../../components/editor/index'), {
    ssr: false,
  });
  const editorRef = useRef(null);
  const handleClick = () => {
    console.log(editorRef.current.getInstance().getValue());
  };
  return (
    <Layout>
      <S.NewPost>
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
                  <S.BoardMenuHistory>
                    Home > Board >{' '}
                    <span style={{ fontWeight: 'bold' }}>NewPost</span>
                  </S.BoardMenuHistory>
                </S.BoardMenu>
                <S.NewPostTitleContainer>
                  <S.NewPostTitleLabel>제목</S.NewPostTitleLabel>
                  <S.NewPostTitleInput placeholder="제목을 입력해주세요" />
                </S.NewPostTitleContainer>
                <S.NewPostTypeContainer>
                  <S.NewPostTypeLabel>게시판 종류</S.NewPostTypeLabel>
                  <S.NewPostTypeInput placeholder="게시판 종류를 입력해주세요" />
                </S.NewPostTypeContainer>
                <Editor editorRef={editorRef} />
                <button onClick={() => handleClick()}>제출하기</button>
              </Col>
            </S.BoardContainer>
          </Row>
        </Grid>
      </S.NewPost>
    </Layout>
  );
};

export default newPost;
