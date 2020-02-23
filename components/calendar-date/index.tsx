import * as S from './styles';

interface CalendarDateProps {
  children?: React.ReactNode;
}

const CalendarDate: React.FunctionComponent<CalendarDateProps> = ({
  children,
}) => {
  return (
    <S.CalendarDate>
      <S.Container>{children}</S.Container>
    </S.CalendarDate>
  );
};

export default CalendarDate;
