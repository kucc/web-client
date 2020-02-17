import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
import Router, { useRouter } from 'next/router';
import BoardNavigation from '../../components/board/boardnavigation';
import { usePost } from './hooks';
import Link from 'next/link';
import {
  faChevronDown,
  faChevronUp,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post: React.FC = () => {
  const router = useRouter();
  const { post, createdAt, updatePost } = usePost();
  const id = router.query.id;
  let numId: number = 0;
  if (typeof id === 'string') {
    numId = parseInt(id);
  }
  return (
    // 개별 POST 페이지
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
                <S.BoardContent>
                  <S.PostNavigation>
                    <Link href="/board/[id-1]" as={`/board/${numId - 1}`}>
                      <S.PostNavigationButton>
                        <S.PostNavigationIcon>
                          <FontAwesomeIcon icon={faChevronUp} />{' '}
                        </S.PostNavigationIcon>
                        이전글
                      </S.PostNavigationButton>
                    </Link>
                    <Link href="/board/[id+1]" as={`/board/${numId + 1}`}>
                      <S.PostNavigationButton>
                        <S.PostNavigationIcon>
                          <FontAwesomeIcon icon={faChevronDown} />{' '}
                        </S.PostNavigationIcon>
                        다음글
                      </S.PostNavigationButton>
                    </Link>
                    <Link href="/board">
                      <S.BackButton>목록으로</S.BackButton>
                    </Link>
                  </S.PostNavigation>
                  <S.PostInfo>
                    <S.PostTitle>{post && post.title} [댓글 수]</S.PostTitle>
                    <S.PostCreatedTime>
                      <S.PostCreatedTimeYYYYMMDD>
                        {createdAt.YYYYMMDD}
                      </S.PostCreatedTimeYYYYMMDD>
                      <S.PostCreatedTimeHHMM>
                        {createdAt.HHMM}
                      </S.PostCreatedTimeHHMM>
                    </S.PostCreatedTime>
                  </S.PostInfo>
                  <S.PostDivider />
                  <S.PostSubInfo>
                    <S.PostAuthor>작성자: {post && post.userId}</S.PostAuthor>
                    <S.PostViews>
                      <FontAwesomeIcon icon={faEye} /> {post && post.views}
                    </S.PostViews>
                  </S.PostSubInfo>
                  <S.PostContent>
                    <p>{post && post.content}</p>
                    {/* 이전글/다음글 기능 체크용 */}
                    <h1 style={{ color: 'red' }}>ID: {post && post.Id}</h1>
                  </S.PostContent>
                </S.BoardContent>
              </Col>
            </S.BoardContainer>
          </Row>
        </Grid>
      </S.Board>
    </Layout>
  );
};

export default Post;
