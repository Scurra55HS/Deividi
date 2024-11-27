import React from 'react'
import { HeaderContainer, LogoContainer, LogoText, NavLink, NavLinks } from '../Styles/Header';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src="/" alt="Logo" width="40" height="40" />
        <LogoText>AGENT LOG</LogoText>
      </LogoContainer>
      <NavLinks>
        <NavLink href="#">TABELA DE REGISTRO</NavLink>
        <NavLink href="#">CADASTRO DE ATENDIMENTO</NavLink>
        <NavLink href="#">GRÁFICOS DE ATENDIMENTOS</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;