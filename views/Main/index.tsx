import { NextPage } from 'next';
import Layout from '../../components/Layout';
import * as S from './styles';

const Main: NextPage = () => (
  <Layout>
    <S.Index>메인 페이지입니다.</S.Index>
  </Layout>
);

export default Main;
