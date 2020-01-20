import styled from 'styled-components';

interface FlipProps {
  flip: boolean;
}

export const Flip = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FlipContainer = styled.div`
  position: relative;

  width: 40.2rem;
  height: 40.2rem;
  border: 0.1rem solid black;
`;

export const FormFront = styled.div<FlipProps>`
  z-index: 900;
  width: 40rem;
  height: 40rem;
  position: absolute;
  background-color: white;

  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: all 0.5s ease-in-out;
  transform-origin: center center;
  transform: ${props => (props.flip ? `rotateY(180deg)` : `rotateY(0deg)`)};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormBack = styled.div<FlipProps>`
  z-index: ${props => (props.flip ? 1000 : 800)};
  width: 40rem;
  height: 40rem;
  position: absolute;
  background-color: green;

  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: all 0.5s ease-in-out;
  transform-origin: center center;
  transform: ${props => (props.flip ? `rotateY(0deg)` : `rotateY(180deg)`)};

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const FormTitle = styled.div`
  font-size: 4rem;
`;

export const FlipButton = styled.button`
  width: 5rem;
  height: 3rem;
  font-size: 1rem;
  background-color: green;
`;
