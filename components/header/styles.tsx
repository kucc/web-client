import styled from 'styled-components';

export const Header = styled.div`
  width: 136.6rem;
  height: 16rem;

  padding-top: 4rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 26rem;
  height: 8rem;

  margin-left: 6rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoCat = styled.img`
  width: 8rem;
  height: 8rem;
`;

export const LogoWord = styled.img`
  width: 16rem;
  height: 8rem;
`;

export const ButtonsContainer = styled.div`
  width: 60rem;

  margin: 0rem 4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  width: 12rem;
  height: 3rem;

  border: none;
  border-right: 2px solid black;

  background-color: white;
  font-size: 1.8rem;
  color: black;

  &:hover {
    background-color: whitesmoke;
  }
`;

export const ProfileContainer = styled.div`
  width: 15rem;

  margin-left: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileIcon = styled.div`
  width: 5rem;
  height: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    width: 3rem;
    height: 3rem;
  }

  .circle {
    width: 3rem;
    height: 3rem;

    border-radius: 50%;
    border: 0.15rem solid #aaaaaa;
    background-color: white;
  }
`;

export const ProfileAvatar = styled.div`
  width: 5rem;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
  }
`;
