import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import MapImg from '../../../public/imgaes/map.png';
import FeedImg from '../../../public/imgaes/feed.png';
import MyInfoImg from '../../../public/imgaes/myInfo.png';

const BottomNavContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  bottom: 0;
  background: white;
`;

const MapButton = styled.div`
  padding: 20px;
  background-image: url(${MapImg});
  background-size: contain;
`

const FeedButton = styled.div`
  padding: 20px;
  background-image: url(${FeedImg});
  background-size: contain;
`

const MyInfoButton = styled.div`
  padding: 20px;
  background-image: url(${MyInfoImg});
  background-size: contain;
`

const BottomNavItem = styled.div`
  width: calc(100% / 3);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid whitesmoke;
`

export default function BottomNav() {
  return (
    <BottomNavContainer>
      <BottomNavItem>
        <Link to='/'>
          <MapButton />
        </Link>
      </BottomNavItem> 
      <BottomNavItem>
        <Link to='/feed'>
          <FeedButton />
        </Link>
      </BottomNavItem>
      <BottomNavItem>
        <Link to='/'>
          <MyInfoButton />
        </Link>
      </BottomNavItem>
    </BottomNavContainer>
  );
}
