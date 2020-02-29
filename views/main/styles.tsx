import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div``;

export const SectionGray = styled.div`
  background: #f3f3f3;
`;

export const MiniFeature = styled.div`
  border: 1px solid #1a1311;
  border-radius: 1rem;
  padding: 0.1rem 1.2rem;
  font-weight: 700;
  color: black;
  letter-spacing: 0.1rem;
`;

export const MiniFeatureContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 5rem;
  padding-right: 25rem;
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const TitleMessage = styled.div`
  color: #c93333;
  font-size: 5rem;
  font-weight: 800;
  letter-spacing: 1.2rem;
  margin-left: 5rem;
  line-height: 7rem;
`;

export const TitleContent = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  margin-left: 5rem;
  margin-top: 1rem;
  color: black;
  line-height: 2.4rem;
`;

export const Image = styled.img`
  box-shadow: 0px 5px 10px;
  width: 100%;
`;

export const ImageGrid = styled.img`
  width: 100%;
  margin: 1rem;
`;

export const RowSpace = styled.div`
  height: 15rem;
`;

export const Message = styled.div`
  color: #c93333;
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 0.5rem;
  margin-left: 10rem;
  line-height: 7rem;
`;

export const Content = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  margin-left: 20rem;
  margin-top: 1rem;
  line-height: 2.5rem;
`;

export const KeywordSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0rem auto;
`;

export const KeywordContainer = styled.div`
  position: relative;
  width: 25rem;
  height: 25rem;
  background: #f3f3f3;
  border-radius: 50%;
  text-align: center;
  margin: 0rem 5rem;
`;

export const KeywordIcon = styled.img`
  display: block;
  position: absolute;
  z-index: 100;
  width: 10rem;
  top: 5rem;
  left: 0rem;
  right: 0rem;
  margin: auto;
`;

export const Keyword = styled.div`
  display: block;
  position: absolute;
  z-index: 100;
  top: 17rem;
  left: 0rem;
  right: 0rem;
  margin: auto;
  color: #1a1311;
  font-size: 2.5rem;
  font-weight: 700;
`;

export const KeywordCaption = styled.div`
  display: block;
  position: absolute;
  z-index: 100;
  top: 27rem;
  left: 0rem;
  right: 0rem;
  margin: auto;
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 2.5rem;
`;

export const ButtonContainer = styled.div`
  position: relative;
  padding: 0rem 50rem;
`;

export const JoinButton = styled.button`
  width: 30rem;
  height: 6rem;
  background-color: #c93333;
  border-radius: 3rem;
  border: 0;
  color: white;
  font-size: 3rem;
  letter-spacing: 0.3rem;
  font-weight: 700;
`;
