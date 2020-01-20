import { NextPage } from 'next';

import * as S from './styles';
import Layout from '../../components/Layout';

const Main: NextPage = () => (
  <Layout>
    <S.Main>
      <S.Index>메인 페이지입니다.</S.Index>
    </S.Main>
  </Layout>
);

export default Main;
