import styled from 'styled-components';

export const Board = styled.div`
  background-color: beige;
`;

export const BoardContainer = styled.div`
  border: 1px solid #d6d6d6;
  max-width: 108rem;
  min-width: 96rem;
  margin: 0 auto;
`;

// for grid test purpose

export const BoardNavbar = styled.ul`
  border: 1px solid #d6d6d6;
  margin-top: 8rem;
  font-size: 1.8rem;
`;

export const BoardNavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem 0;
`;

export const BoardBullet = styled.div`
  border-radius: 100%;
  background-color: #c93333;
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 1rem;
`;

export const BoardMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 2rem;
`;

export const BoardMenuTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const BoardMenuHistory = styled.div`
  font-size: 1.2rem;
  margin-left: auto;
  margin-right: 1rem;
`;

export const BoardContent = styled.div`
  border: 1px solid #d6d6d6;
  height: 60vh;
`;
