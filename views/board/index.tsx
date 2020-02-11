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
              <S.Col1>이건 3짜리 column</S.Col1>
            </Col>
            <Col span={3}>
              <S.Col1>이건 3짜리 column</S.Col1>
            </Col>
            <Col span={3}>
              <S.Col1>이건 3짜리 column</S.Col1>
            </Col>
            <Col span={3}>
              <S.Col1>이건 3짜리 column</S.Col1>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <S.Col2>이건 6짜리 column</S.Col2>
            </Col>
            <Col span={6}>
              <S.Col2>이건 6짜리 column</S.Col2>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <S.Col3>이건 12짜리 column</S.Col3>
            </Col>
            <Col span={3}>
              <S.Col3>이건 3짜리 column</S.Col3>
            </Col>
            <Col span={10}>
              <S.Col3>이건 10짜리 column</S.Col3>
            </Col>
          </Row>
        </Grid>
      </S.Board>
    </Layout>
  );
};

export default Board;
