import styled from 'styled-components';

export const Header = styled.div`
  height: 15rem;
  background-color: white;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const LogoCharacter = styled.div`
  height: 12rem;
  width: 12rem;
  margin-left: 8rem;

  border: 1px solid #707070;
`;

export const LogoMessage = styled.div`
  height: 6rem;
  width: 12rem;
  margin-left: 3rem;
  margin-right: 5.3rem;

  border: 1px solid #707070;
`;

export const MenuItem = styled.div`
  font-size: 3rem;
  letter-spacing: 0.3rem;
  margin-left: 5.1rem;
  margin-right: 5.1rem;
`;

export const MenuDivider = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Profile = styled.div`
  width: 14rem;
  height: 8.5rem;
  margin-left: 15rem;
  background-color: white;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProfileButton = styled.div`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 1rem;

  border: 1px solid #707070;
`;

export const ProfileImage = styled.div`
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 50%;

  border: 1px solid #707070;
`;
