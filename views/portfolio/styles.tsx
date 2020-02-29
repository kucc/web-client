import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';

export const Portfolio = styled.div``;

export const PortfolioContainer = styled.div`
  width: 100%;
  max-width: 136.6rem;
  min-width: 96rem;
  margin: 0 auto;
  min-height: 45rem;
`;

export const PortfolioNavBar = styled.ul`
  font-size: 1.8rem;
  margin-top: 8rem;
`;

export const PortfolioMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 2rem;
  margin: 2rem 0 3rem 0;
`;

export const PortfolioMenuTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const PortfolioMenuHistory = styled.div`
  font-size: 1.2rem;
  margin-left: auto;
  margin-right: 1rem;
`;

export const PortfolioContent = styled.div`
  width: 100%;
  height: 49rem;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

export const Slider = styled(AwesomeSlider)``;

export const SliderContentWrapper = styled.div``;

interface SliderContentProps {
  backgroundColor?: string;
  color?: string;
}

export const SliderContentBackground = styled.div<SliderContentProps>`
  max-width: 136.6rem;
  min-width: 106rem;
  height: 80rem;

  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 2rem;
  background-color: white;
  color: ${props => (props.color ? props.color : 'black')};

  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'white'};
`;
