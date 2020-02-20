import styled from 'styled-components';

export const GalleryImage = styled.div`
  height: 30rem;
  border: 1px solid #d6d6d6;
  border-radius: 2rem;
  background-color: #fcfcfc;
  margin-bottom: 2rem;
`;

export const GalleryImageInfo = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: #ffffff;
  opacity: 0;
  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
export const GalleryImageTitle = styled.div`
  padding: 1rem 0;
  font-size: 2rem;
  font-weight: bold;
`;

export const GalleryImageDate = styled.div`
  padding: 1rem 0;
`;
