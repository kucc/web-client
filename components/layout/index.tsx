import * as S from './styles';
import Header from '../header';
import Footer from '../footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Layout>
      <Header />
      <S.Content>
        <S.Container>{children}</S.Container>
      </S.Content>
      <Footer />
    </S.Layout>
  );
};

export default Layout;
