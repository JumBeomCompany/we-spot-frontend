import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const BottomNavContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  bottom: 0;
`;

const BottomNavItem = styled.div`
  width: calc(100% / 3);
  text-align: center;
`

export default function BottomNav() {
  return (
    <BottomNavContainer>
      <BottomNavItem>
        <Link to='/'>지도</Link>
      </BottomNavItem> 
      <BottomNavItem>
        <Link to='/feed'>피드</Link>
      </BottomNavItem>
      <BottomNavItem>
        <Link to='/'>내정보</Link>
      </BottomNavItem>
    </BottomNavContainer>
  );
}
