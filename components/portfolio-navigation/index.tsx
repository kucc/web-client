import Link from 'next/link';
import * as S from './styles';

const PortfolioNavigation = () => {
  return (
    <>
      <Link
        href={{ pathname: '/portfolio', query: { portfolioTypeId: '2020-1' } }}
        as="/portfolio"
      >
        <li key={1}>
          <S.PortFolioNavItem>
            <S.PortFolioBullet />
            2020-1
          </S.PortFolioNavItem>
        </li>
      </Link>
      <Link
        href={{ pathname: '/portfolio', query: { portfolioTypeId: '2019-2' } }}
        as="/portfolio"
      >
        <li key={2}>
          <S.PortFolioNavItem>
            <S.PortFolioBullet />
            2019-2
          </S.PortFolioNavItem>
        </li>
      </Link>
      <Link
        href={{ pathname: '/portfolio', query: { portfolioTypeId: '2019-1' } }}
        as="/portfolio"
      >
        <li key={3}>
          <S.PortFolioNavItem>
            <S.PortFolioBullet />
            2019-1
          </S.PortFolioNavItem>
        </li>
      </Link>
    </>
  );
};

export default PortfolioNavigation;
