import styled from 'styled-components';

export const Board = styled.div``;

export const BoardContainer = styled.div`
  width: 100%;
  max-width: 136.6rem;
  min-width: 96rem;
  margin: 0 auto;
  min-height: 45rem;
`;

export const BoardNavbar = styled.ul`
  font-size: 1.8rem;
  margin-top: 8rem;
`;

export const BoardIndex = styled.div`
  border: 1px solid #d6d6d6;
  display: flex;
  flex-direction: row;
  font-size: 1.4em;
  font-weight: bold;
  padding: 1rem 0;
`;

export const BoardContent = styled.div``;
export const PostNavigation = styled.div`
  /* border: 1px solid #d6d6d6; */
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
`;
export const PostNavigationButton = styled.button`
  font-size: 1.4rem;
  border: none;
  padding: 1rem;
`;
export const PostNavigationIcon = styled.i`
  color: #c93333;
  margin-right: 0.4rem;
`;
export const BackButton = styled.button`
  margin-left: auto;
  border-radius: 0.5rem;
`;

export const PostInfo = styled.div`
  /* border: 1px solid #d6d6d6; */
  display: flex;
  flex-direction: row;
  border-radius: 0.5rem;
`;

export const PostTitle = styled.div`
  color: #707070;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const PostCreatedTime = styled.div`
  color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;
export const PostCreatedTimeYYYYMMDD = styled.div`
  margin-right: 1rem;
`;
export const PostCreatedTimeHHMM = styled.div``;

export const PostDivider = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: #976666;
  margin: 1rem 0;
`;

export const PostSubInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3rem;
`;
export const PostAuthor = styled.div``;
export const PostViews = styled.div``;

export const PostContent = styled.div`
  border: 1px solid #d6d6d6;
  background-color: #f6f6f6;
  height: 50rem;
  padding: 1rem;
`;
