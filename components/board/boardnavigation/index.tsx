import * as S from './styles';
const BoardMenuList = ['공지', '자유게시판', '교우게시판'];

const BoardNavigation = () => {
  return (
    <>
      {BoardMenuList.map((Item, i) => (
        <li key={i}>
          <S.BoardNavItem>
            <S.BoardBullet />
            {Item}
          </S.BoardNavItem>
        </li>
      ))}
    </>
  );
};

export default BoardNavigation;
