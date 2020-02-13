import styled from 'styled-components';

export const PaginationBar = styled.div`
  display: flex;
  margin: 2rem 0;
  font-size: 1.4rem;
  justify-content: center;
`;

export const PageButton = styled.button`
  color: black;
  border: none;
  float: left;
  padding: 8px 16px;
  font-weight: bold;
  &:hover {
    background-color: #4caf50;
    color: white;
  }
`;
