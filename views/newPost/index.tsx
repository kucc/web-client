import Link from 'next/link';
import { NextPage } from 'next';
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
            <Col span={12}>이 얍</Col>
          </Row>
        </Grid>
      </S.NewPost>
    </Layout>
  );
};

export default newPost;
