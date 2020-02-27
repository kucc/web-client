import * as S from './styles';

interface PaginationProps {
  page;
  setCurrentPage;
  increasePageHandler;
  decreasePageHandler;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  setCurrentPage,
  increasePageHandler,
  decreasePageHandler,
}) => {
  const pagesArray = Array();

  for (let i = page.start; i < page.end + 1; i++) {
    pagesArray.push(i);
  }

  const PageButtons = pagesArray.map((button, i) => (
    <S.PageButton
      key={i}
      onClick={() => setCurrentPage(button)}
      style={
        button == page.current
          ? { fontWeight: 'bold', backgroundColor: '#c93333', color: 'white' }
          : null
      }
    >
      {button}
    </S.PageButton>
  ));

  return (
    <S.Pagination>
      <S.PageButton onClick={decreasePageHandler}>{'<'}</S.PageButton>
      {PageButtons}
      <S.PageButton onClick={increasePageHandler}>{'>'}</S.PageButton>
    </S.Pagination>
  );
};

export default Pagination;
