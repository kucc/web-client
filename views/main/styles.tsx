import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div`
  margin: 0rem -4rem;
  position: relative;
`;

export const SectionGray = styled.div`
  margin: 0rem -4rem;
  background: #f3f3f3;
  position: relative;
  height: 50rem;
`;

export const SectionText = styled.div`
  margin-left: 5rem;
  position: relative;
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

export const CarouselContainer = styled.div`
  margin: 0rem -3rem;
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
  width: 24rem;
  &:hover {
    cursor: default;
  }
`;

export const Gallery = styled.div`
  margin-left: 3rem;
`;

export const ImageGridContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const ImageGrid = styled.img`
  width: 100%;
  transition: all 0.3s ease;
`;

export const ImageGridCaption = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0;
  &:hover {
    opacity: 1;
    background-color: #c93333bf;
  }
`;

export const CaptionTitle = styled.div`
  position: absolute;
  top: 9rem;
  left: 0;
  right: 0;
  margin: auto;
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
`;

export const Caption = styled.div`
  position: absolute;
  top: 12.5rem;
  left: 0;
  right: 0;
  margin: auto;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 500;
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

export const LeafCarouselContainer = styled.div`
  width: 75rem;
  height: 35rem;
  margin-top: 15rem;
  margin-right: -1rem;
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
  transition: all 0.2s ease;
  &:hover {
    opacity: 1;
    transform: scale(0.9);
    background-color: #c9333380;
  }
`;

export const Decoration1 = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 3rem;
  height: 46.7rem;
  background: #eab1b1;
`;

export const Decoration2 = styled.div`
  position: absolute;
  top: -5rem;
  left: 55rem;
  width: 15rem;
  height: 15rem;
  background: #eab1b1;
`;

export const Decoration3 = styled.div`
  position: absolute;
  top: 40rem;
  right: 0rem;
  width: 12rem;
  height: 16rem;
  background: #c9333361;
`;

export const Decoration4 = styled.div`
  position: absolute;
  z-index: 1;
  top: 60rem;
  right: 15rem;
  width: 6rem;
  height: 6rem;
  background: #c93333bf;
`;

export const Decoration5 = styled.div`
  position: absolute;
  z-index: 1;
  top: 66rem;
  right: 5rem;
  width: 4rem;
  height: 4rem;
  background: #c93333;
`;
