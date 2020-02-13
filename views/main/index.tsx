import { NextPage } from 'next';

import * as S from './styles';
import Layout from '../../components/layout';

const Main: NextPage = () => (
  <Layout>
    <S.Main>
      <S.Index></S.Index>
    </S.Main>
  </Layout>
);

export default Main;
