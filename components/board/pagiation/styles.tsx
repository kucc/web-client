import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  margin: 2rem 0;
  font-size: 1.4rem;
  justify-content: center;
  transition: 0.3s ease;
`;

export const PageButton = styled.button`
  color: black;
  border: none;
  float: left;
  padding: 8px 16px;
  font-weight: bold;
  &:hover {
    color: #c93333;
  }
`;
