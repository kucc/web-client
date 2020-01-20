import * as S from './styles';
import { NextPage } from 'next';
import { useState } from 'react';

const Flip: NextPage = () => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };

  return (
    <S.Flip>
      <S.FlipContainer>
        <S.FormFront flip={flip}>
          <S.FormTitle>이것은 앞부분 입니다</S.FormTitle>
          <S.FlipButton onClick={handleFlip}>뒤집기</S.FlipButton>
        </S.FormFront>
        <S.FormBack flip={flip}>
          <S.FormTitle>이것은 뒷부분 입니다</S.FormTitle>
          <S.FlipButton onClick={handleFlip}>뒤집기</S.FlipButton>
        </S.FormBack>
      </S.FlipContainer>
    </S.Flip>
  );
};

export default Flip;
