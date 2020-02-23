import Link from 'next/link';
import { NextPage } from 'next';
import Editor from '../../components/editor';
import * as S from './styles';
import Layout from '../../components/layout';
import BoardNavigation from '../../components/board/board-navigation';
import { Grid, Row, Col } from '../../components/grid/styles';

const newPost: NextPage = () => {
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
                    Home > Board > NoticeBoard >{' '}
                    <span style={{ fontWeight: 'bold' }}>New</span>
                  </S.BoardMenuHistory>
                </S.BoardMenu>
                <S.NewPostTitleContainer>
                  <S.NewPostTitleLabel>제목</S.NewPostTitleLabel>
                  <S.NewPostTitleInput placeholder="제목을 입력해주세요" />
                </S.NewPostTitleContainer>
                <Editor />
              </Col>
            </S.BoardContainer>
          </Row>
        </Grid>
      </S.NewPost>
    </Layout>
  );
};

export default newPost;
