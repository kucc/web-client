import styled from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.div`
  width: 128rem;
  min-width: 96rem;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #666666;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const DescriptionLineContainer = styled.div`
  width: 100%;
  font-size: 1.2rem;
  color: white;
  margin-bottom: 1.2rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  height: 4rem;
`;
