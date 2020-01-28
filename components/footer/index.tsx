import * as S from './styles';

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.Messages>
        <S.MessagePair>
          <S.MessageKey></S.MessageKey>
          <S.MessageValue></S.MessageValue>
        </S.MessagePair>
        <S.MessagePair>
          <S.MessageKey
            style={{
              width: '15rem',
            }}
          ></S.MessageKey>
          <S.MessageValue></S.MessageValue>
        </S.MessagePair>
      </S.Messages>
      <S.Logos></S.Logos>
    </S.Footer>
  );
};

export default Footer;
