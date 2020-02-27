import styled from 'styled-components';

export const Board = styled.div``;

export const BoardContainer = styled.div`
  width: 100%;
  max-width: 136.6rem;
  min-width: 96rem;
  margin: 0 auto;
  min-height: 45rem;
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
export const BoardContent = styled.div``;

export const BoardNavbar = styled.ul`
  font-size: 1.8rem;
  margin-top: 8rem;
`;

export const BoardIndexAuthor = styled.div`
  text-align: center;
  width: 10%;
`;
export const BoardIndexTitle = styled.div`
  text-align: center;
  width: 60%;
`;
export const BoardIndexLikes = styled.div`
  text-align: center;
  width: 10%;
`;
export const BoardIndexDate = styled.div`
  text-align: center;
  width: 10%;
`;
export const BoardIndexViews = styled.div`
  text-align: center;
  width: 10%;
`;
export const BoardIndexItem = styled.div`
  padding: 0 5rem;
`;

export const BoardPost = styled.div`
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.2rem;
  border-bottom: 1px solid #d6d6d6;
`;

export const BoardSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const BoardSearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #d6d6d6;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  width: 80%;
`;

export const BoardSearchInput = styled.input`
  border: none;
  font-size: 1.2rem;
  margin-left: 1rem;
  width: 100%;
`;

export const BoardSearchButton = styled.button`
  border: 1px solid #d6d6d6;
  border-radius: 2rem;
  color: #707070;
  height: 3.2rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fff1f1;
    border: 1px solid #c93333;
    color: #a00b0b;
  }
`;

export const BoardNewPostButton = styled.button`
  border: 1px solid #d6d6d6;
  border-radius: 2rem;
  background-color: #c93333;
  color: #ffffff;
  height: 3.2rem;
  padding: 0.5rem 1rem;
  float: right;
  transition: all 0.3s ease;
  &:hover {
    background-color: #a00b0b;
    font-weight: bold;
  }
`;
