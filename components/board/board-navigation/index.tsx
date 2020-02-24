import Link from 'next/link';
import * as S from './styles';

const BoardNavigation = () => {
  return (
    <>
      <Link
        href={{ pathname: '/board', query: { postTypeId: 'NOTICE' } }}
        as="/board"
      >
        <li key={1}>
          <S.BoardNavItem>
            <S.BoardBullet />
            공지
          </S.BoardNavItem>
        </li>
      </Link>
      <Link
        href={{ pathname: '/board', query: { postTypeId: 'FREE' } }}
        as="/board"
      >
        <li key={2}>
          <S.BoardNavItem>
            <S.BoardBullet />
            자유게시판
          </S.BoardNavItem>
        </li>
      </Link>
      <Link
        href={{ pathname: '/board', query: { postTypeId: 'ALUMNI' } }}
        as="/board"
      >
        <li key={3}>
          <S.BoardNavItem>
            <S.BoardBullet />
            교우게시판
          </S.BoardNavItem>
        </li>
      </Link>
    </>
  );
};

export default BoardNavigation;
