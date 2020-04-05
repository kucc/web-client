import Link from 'next/link';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import {
  faChevronDown,
  faChevronUp,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import * as S from './styles';
import Layout from '../../components/layout';
import BoardNavigation from '../../components/board/board-navigation';
import { Grid, Row, Col } from '../../components/grid/styles';
import { usePost } from './hooks';
import {
  parseDateStringIntoHHMM,
  parseDateStringIntoYYMMDD,
} from '../../lib/dateStringParser';

const Viewer = dynamic(import('../../components/viewer'), { ssr: false });
interface PostProps {
  data;
  rest;
}

const Post: NextPage<PostProps> = ({ data, rest }) => {
  let { Id, title, content, userId, type, createdAt, views } = data;
  if (data.statusCode === 400) {
    const router = useRouter();
    const { id } = router.query;
    const { postObject } = usePost(id);
    if (postObject) {
      Id = postObject.Id;
      title = postObject.title;
      content = postObject.content;
      userId = postObject.userId;
      type = postObject.type;
      createdAt = postObject.createdAt;
      views = postObject.views;
    }
  }

  const createdAtInYYYYMMDD = createdAt
    ? parseDateStringIntoYYMMDD(createdAt)
    : null;
  const createdAtInHHMM = createdAt ? parseDateStringIntoHHMM(createdAt) : null;

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
                    <Link
                      href={{
                        pathname: '/board',
                        query: { postTypeId: type },
                      }}
                      as="/board"
                    >
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
                    {content && <Viewer initialPost={content} />}
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

Post.getInitialProps = async ({ query, res, req, ...rest }) => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/post/${query.postId}`,
    );
    const data = await response.json();
    return { data, rest };
  } catch (error) {
    console.log(error);
  }
};

export default Post;
