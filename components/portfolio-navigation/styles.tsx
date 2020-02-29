import styled from 'styled-components';

export const PortFolioNavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem 0;

  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
`;

export const PortFolioBullet = styled.div`
  border-radius: 100%;
  background-color: #c93333;
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 1rem;
`;
