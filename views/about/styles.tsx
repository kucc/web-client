import styled from 'styled-components';

export const Introduction = styled.div`
  width: 100%;
  position: relative;

  background: url('/images/About-WeCodeTogether-Big.jpg');
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
  color: #ffffff;
  opacity: 1;
  letter-spacing: 12.96px;
  font-size: 5.4rem;
  text-align: center;
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
  border-radius: 50%;

  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleWords = styled.div`
  color: #707070;
  font-size: 1.2rem;
  letter-spacing: 0.36px;
  text-align: center;

  display: flex;
`;

export const LineContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
`;

export const Line = styled.div`
  width: 100%;
  border: 3px;
  border-style: solid;
  border-color: #707070;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  margin: 3rem 0rem;
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
`;

export const Arrow = styled.div`
  width: 100%;
  border: 3px;
  border-style: solid;
  border-color: #707070;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  margin: 3rem 0rem;
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

export const ExecutivesPicture = styled.img`
  width: 53rem;
  height: 36rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExecutivesTitle = styled.div`
  font-size: 3rem;
  color: #c93333;
  font-weight: bold;
  letter-spacing: 3px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-right: 10rem;
  margin-bottom: 6rem;
`;

export const ExecutivesColor = styled.div`
  background: #eab1b1;

  margin-left: 3rem;
  width: 11.9rem;
  height: 36rem;
`;

export const ExecutivesCommentContainer = styled.div`
  height: 3rem;
  font-size: 1.8rem;
  letter-spacing: 0.72px;
  color: #707070;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10rem;
  margin-bottom: 3rem;

  .content {
    width: 20rem;
  }

  .name {
    width: 18rem;
    text-align: right;
  }
`;

export const KeyWord = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const KeyWordPic1 = styled.div`
  position: relative;

  color: white;
  font-size: 2.4rem;

  flex-direction: column;
  justify-content: flex-end;
  display: flex;
  align-items: center;

  width: 35rem;
  height: 24rem;
  background: url('/images/About-KeyWord1-Big.jpg');
  background-size: cover;
`;

export const KeyWordPic2 = styled.div`
  position: relative;

  color: white;
  font-size: 2.4rem;

  flex-direction: column;
  justify-content: flex-end;
  display: flex;
  align-items: center;

  width: 35rem;
  height: 24rem;
  background: url('/images/About-KeyWord2-Big.jpg');
  background-size: cover;
`;

export const KeyWordPic3 = styled.div`
  position: relative;

  color: white;
  font-size: 2.4rem;

  flex-direction: column;
  justify-content: flex-end;
  display: flex;
  align-items: center;

  width: 35rem;
  height: 24rem;
  background: url('/images/About-KeyWord3-Big.jpg');
  background-size: cover;
`;

export const KeyWordExpl = styled.div`
  color: black;
  font-size: 1.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 35rem;
  height: 12rem;
  text-align: center;

  margin-top: 3rem;
`;

export const KeyWordTitle = styled.div`
  color: white;
  font-size: 2.4rem;

  display: flex;
  flex-direction: row;
  margin: 3rem 0rem;
`;

export const ContactInfoContainer = styled.div`
  width: 55rem;
  align-items: flex-start;
  flex-direction: row;
`;

export const ContactTitle = styled.div`
  color: #c93333;
  font-size: 5.4rem;
  font-weight: bold;
  letter-spacing: 5.4px;

  text-align: left;
`;

export const ContactInfo = styled.div`
  color: #707070;
  font-size: 18px;
  letter-spacing: 0.54px;
  height: 20px;
  display: flex;

  margin: 3rem 0rem;

  .title {
    width: 18rem;
    margin-left: 9rem;
  }
  .content {
    width: 28rem;
  }
`;

export const ContactMap = styled.div`
  width: 444px;
  height: 303px;
  border: 1px;
  border-style: solid;
  border-color: #707070;
  background: url
    (
      'https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=300&h=300&center=127.1054221,37.3591614&level=16&X-NCP-APIGW-API-KEY-ID={애플리케이션 등록 시 발급받은 client id값}'
    );
`;

export const ContactMapContainer = styled.div`
  display: flex;
`;

export const RedBox = styled.div`
  width: 92px;
  height: 303px;
  background: #c93333;
  margin-left: 1.6rem;
`;

export const IntroductionSection = styled.div`
  margin-bottom: 27rem;
`;

export const KuccSection = styled.div`
  height: 24rem;

  background-color: #f3f3f3;

  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const PresidentSection = styled.div`
  margin-bottom: 10rem;
`;

export const ExecutiveSection = styled.div`
  height: 50rem;

  background-color: #f3f3f3;

  margin-bottom: 27rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
`;

export const KeywordSection = styled.div`
  height: 39rem;
  margin-bottom: 15rem;
`;

export const ContactSection = styled.div`
  margin-bottom: 12rem;
  height: 30rem;
  display: flex;
  justify-content: flex-end;
`;
