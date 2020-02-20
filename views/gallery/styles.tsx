import styled from 'styled-components';

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GalleryContainer = styled.div`
  width: 100%;
  max-width: 136.6rem;
  min-width: 96rem;
  margin: 0 auto;
  min-height: 45rem;
`;

export const GalleryMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 2rem;
  margin: 2rem 0 4rem 0;
`;

export const GalleryMenuTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const GalleryMenuHistory = styled.div`
  font-size: 1.2rem;
  margin-left: auto;
  margin-right: 1rem;
`;

export const ImageContainer = styled.div`
  height: 30rem;
  border: 1px solid #d6d6d6;
  border-radius: 2rem;
  background-color: #fcfcfc;
  margin-bottom: 2rem;
`;

export const GallerySearchContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const GallerySearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #d6d6d6;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  width: 80%;
`;

export const GallerySearchInput = styled.input`
  border: none;
  font-size: 1.2rem;
  margin-left: 1rem;
  width: 100%;
`;

export const GallerySearchButton = styled.button`
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

export const GalleryNewPostButton = styled.button`
  border: 1px solid #d6d6d6;
  border-radius: 2rem;
  background-color: #c93333;
  color: #ffffff;
  height: 3.2rem;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  float: right;
  transition: all 0.3s ease;
  &:hover {
    background-color: #a00b0b;
    font-weight: bold;
  }
`;
