import styled from 'styled-components';

export const Introduction = styled.div`
  width: 100%;
  position: relative;

  background: url('/images/About-WeCodeTogether-Big.png');
  background-size: cover;
  height: 60.8rem;

  padding: 0rem 14rem;

  display: flex;
  flex-direction: column;

  justify-content: flex-end;
`;

export const IntroductionImage = styled.img`
  width: 100%;
  border-width: 0.1px;
  border-style: solid;
  border-color: #707070;
`;

export const IntroductionMessage = styled.div`
  color: #ffffff;
`;

export const IntroductionTitle = styled.div`
  letter-spacing: 12.96px;
  font-size: 5.4rem;

  text-align: center;
  letter-spacing: 12.96px;
  color: #ffffff;
  opacity: 1;

  font-weight: bold;
`;

export const IntroductionContentContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  margin: 6rem 0rem;
`;

export const IntroductionContent = styled.div`
  width: 45rem;
  height: 15rem;

  text-align: center;
  font-size: 1.8rem;

  letter-spacing: 0.54px;
`;

export const LeftCircleContainer = styled.div`
  width: 6rem;
  height: 6rem;

  display: flex;

  margin-left: auto;
`;

export const RightCircleContainer = styled.div`
  width: 6rem;
  height: 6rem;

  display: flex;

  margin-right: auto;
`;

export const Circle = styled.div`
  width: 6rem;
  height: 6rem;
  border-style: solid;
  border-width: 3px;
  border-color: #707070;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
`;

export const CircleWords = styled.div`
  display: flex;
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 0.36px;
  color: #707070;
`;

export const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.hr`
  width: 100%;
  border: 3px;
  border-style: solid;
  border-color: #707070;
  margin-right: 3rem;
  display: flex;
  margin-top: 3rem;
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.hr`
  width: 100%;
  border: 3px;
  border-style: solid;
  border-color: #707070;
  margin-right: 3rem;
  display: flex;
  margin-top: 3rem;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  font-weight: bold;
  color: #c93333;
  font-size: 5.4rem;
  letter-spacing: 5.4px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13.2rem;
`;

export const Text = styled.div`
  color: #707070;
  font-size: 2.4rem;
  letter-spacing: 2.4px;
  text-align: center;
`;

export const PresidentPicture = styled.img`
  height: 30rem;
`;

export const PresidentCommentTitle = styled.div`
  font-size: 3rem;
  color: #c93333;
  font-weight: bold;
  letter-spacing: 3px;
`;

export const PresidentCommentContainer = styled.div`
  margin-left: 9rem;
`;

export const PresidentComment = styled.div`
  font-size: 2.4rem;
  letter-spacing: 0.72px;
  color: #707070;

  margin-top: 3rem;
`;

export const ExecutivesContainer = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
`;

export const ExecutivesPicture = styled.img`
  width: 100%;
  height: 36rem;
  display: flex;
`;
export const ExecutivesTitle = styled.div`
  font-size: 3rem;
  color: #c93333;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 6rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const ExecutivesCommentContainer = styled.div`
  height: 3rem;
  font-size: 1.8rem;
  letter-spacing: 0.72px;
  color: #707070;
  display: flex;

  justify-content: center;
  align-items: center;

  margin-bottom: 3rem;

  .content {
    display: flex;
  }

  .name {
    width: 18rem;
    text-align: right;
  }
`;

export const RowContainer = styled.div`
  margin-bottom: 270px;
`;

export const RowContainerSmall = styled.div`
  margin-bottom: 99px;
`;
