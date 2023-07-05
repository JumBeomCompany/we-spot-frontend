import React from 'react';
import styled from 'styled-components'

const BottomNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
`;

const BottomNavItem = styled.div`
  width: calc(100% / 3);
  text-align: center;
`

export default function Footer() {
  return (
    <BottomNavContainer>
      <BottomNavItem>
        <div>커플맵</div>
      </BottomNavItem> 
      <BottomNavItem>
        <div>피드</div>
      </BottomNavItem>
      <BottomNavItem>
        <div>내정보</div>
      </BottomNavItem>
    </BottomNavContainer>
  );
}
