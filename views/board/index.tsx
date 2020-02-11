import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';
// for grid test purpose
const Board: React.FC = () => {
  return (
    <Layout>
      <S.Board>
        <Grid>
          <Row>
            <Col span={3}>
              <S.Col1>
                <h2>이건 3짜리 column</h2>
              </S.Col1>
            </Col>
            <Col span={3}>
              <S.Col1>
                <h2>이건 3짜리 column</h2>
              </S.Col1>
            </Col>
            <Col span={3}>
              <S.Col1>
                <h2>이건 3짜리 column</h2>
              </S.Col1>
            </Col>
            <Col span={3}>
              <S.Col1>
                <h2>이건 3짜리 column</h2>
              </S.Col1>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <S.Col2>
                <h2>이건 6짜리 column</h2>
              </S.Col2>
            </Col>
            <Col span={6}>
              <S.Col2>
                <h2>이건 6짜리 column</h2>
              </S.Col2>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <S.Col3>
                <h2>이건 3짜리 column</h2>
              </S.Col3>
            </Col>
            <Col span={10}>
              <S.Col3>
                <h2>이건 10짜리 column</h2>
              </S.Col3>
            </Col>
          </Row>
          <Row>
            <Col span={4} offset={4}>
              <S.Col1>
                <h2>4짜리 column을 4만큼 당기기</h2>
              </S.Col1>
            </Col>
          </Row>
        </Grid>
      </S.Board>
    </Layout>
  );
};

export default Board;
