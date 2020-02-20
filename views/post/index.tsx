import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
import BoardNavigation from '../../components/board/board-navigation';
import { usePost } from './hooks';
import Link from 'next/link';
import { NextPage } from 'next';
import {
  faChevronDown,
  faChevronUp,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fetch from 'isomorphic-unfetch';
import {
  dateStringParserInYYYYMMDD,
  dateStringParserInHHMM,
} from '../../lib/dateStringParser';

interface PostProps {
  Id?: number;
  title?: string;
  content?: string;
  userId?: number;
  createdAt?: string;
  views?: number;
  statusCode?;
}

const Post: NextPage<PostProps> = props => {
  let postObject = null;
  let { Id, title, content, userId, createdAt, views } = props;
  if (props.statusCode === 400) {
    postObject = usePost().postObject;
  }
  if (postObject) {
    Id = postObject.Id;
    title = postObject.title;
    content = postObject.content;
    userId = postObject.userId;
    createdAt = postObject.createdAt;
    views = postObject.views;
  }
  const createdAtInYYYYMMDD = createdAt
    ? dateStringParserInYYYYMMDD(createdAt)
    : null;
  const createdAtInHHMM = createdAt ? dateStringParserInHHMM(createdAt) : null;
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
                    <Link
                      href={{
                        pathname: '/board/[id]',
                        query: { postId: Id - 1 },
                      }}
                      as={`/board/${Id - 1}`}
                    >
                      <S.PostNavigationButton>
                        <S.PostNavigationIcon>
                          <FontAwesomeIcon icon={faChevronUp} />{' '}
                        </S.PostNavigationIcon>
                        이전글
                      </S.PostNavigationButton>
                    </Link>
                    <Link
                      href={{
                        pathname: '/board/[id]',
                        query: { postId: Id + 1 },
                      }}
                      as={`/board/${Id + 1}`}
                    >
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
                    <S.PostTitle>{title} [댓글 수]</S.PostTitle>
                    <S.PostCreatedTime>
                      <S.PostCreatedTimeYYYYMMDD>
                        {createdAtInYYYYMMDD}
                      </S.PostCreatedTimeYYYYMMDD>
                      <S.PostCreatedTimeHHMM>
                        {createdAtInHHMM}
                      </S.PostCreatedTimeHHMM>
                    </S.PostCreatedTime>
                  </S.PostInfo>
                  <S.PostDivider />
                  <S.PostSubInfo>
                    <S.PostAuthor>작성자: {userId}</S.PostAuthor>
                    <S.PostViews>
                      <FontAwesomeIcon icon={faEye} /> {views}
                    </S.PostViews>
                  </S.PostSubInfo>
                  <S.PostContent>
                    <p>{content}</p>
                    {/* 이전글/다음글 기능 체크용 */}
                    <h1 style={{ color: 'red' }}>ID: {Id}</h1>
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

Post.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:4000/post/${query.postId}`);
  const data = await res.json();
  return data;
};

export default Post;
