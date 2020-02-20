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
  /* border: 1px solid #d6d6d6; */
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
