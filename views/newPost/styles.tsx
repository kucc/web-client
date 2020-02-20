import styled from 'styled-components';

export const NewPost = styled.div``;

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

export const BoardMenu = styled.div`
  /* border: 1px solid #d6d6d6; */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 2rem;
  margin: 2rem 0 4rem 0;
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

export const BoardIndex = styled.div`
  border: 1px solid #d6d6d6;
  display: flex;
  flex-direction: row;
  font-size: 1.4em;
  font-weight: bold;
  padding: 1rem 0;
`;

export const NewPostTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const NewPostTitleLabel = styled.label`
  margin-right: 1rem;
`;
export const NewPostTitleInput = styled.input`
  width: 80%;
  line-height: 3rem;
  padding: 0 1rem;
`;
