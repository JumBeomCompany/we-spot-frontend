import React from 'react';
import styled from 'styled-components';
import headerLogoImg from '../../../public/imgaes/header-img.png';

const HeaderContainer = styled.header`
  height: 70px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderLogo = styled.img`
  width: 60px;
  height: 60px;
`;

const HeaderText = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
  text-shadow: 3px 0 0 white;
`

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={headerLogoImg} alt="헤더 로고"/> 
      <HeaderText>We Spot</HeaderText>
    </HeaderContainer>
  );
}
