import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
import { useRouter } from 'next/router';
import BoardNavigation from '../../components/board/boardnavigation';
import { usePost } from './hooks';
import {
  faChevronDown,
  faChevronUp,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post: React.FC = () => {
  const router = useRouter();
  const { post, createdAt } = usePost();
  const { id } = router.query;

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
                    <S.PostNavigationButton>
                      <S.PostNavigationIcon>
                        <FontAwesomeIcon icon={faChevronUp} />{' '}
                      </S.PostNavigationIcon>
                      이전글
                    </S.PostNavigationButton>
                    <S.PostNavigationButton>
                      <S.PostNavigationIcon>
                        <FontAwesomeIcon icon={faChevronDown} />{' '}
                      </S.PostNavigationIcon>
                      다음글
                    </S.PostNavigationButton>
                    <S.BackButton>목록으로</S.BackButton>
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
                    {/* name views */}
                  </S.PostSubInfo>
                  <S.PostContent>
                    <p>{post && post.content}</p>
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
