import styled from 'styled-components';


export const HeaderContainer = styled.header`
  background-color: #23288C;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.span`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: auto;
  margin-right: 100px;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;
