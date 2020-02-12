import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 16rem;
  display: flex;
  flex-direction: row;

  justify-content: center;
`;

export const HeaderContainer = styled.div`
  min-width: 96rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuItem = styled.button`
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
  &:last-child {
    border: none;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled.button`
  border: none;

  background-color: #666666;
  color: white;
  font-size: 2rem;
  padding: 0.5rem;

  &:hover {
    background-color: #e1e1e1;
    color: black;
  }
`;
