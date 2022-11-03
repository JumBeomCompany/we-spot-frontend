import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledMap = styled.div`width: 80vw; height: 40vw;`

export default function MapMain() {
  useEffect(() => {
    const initMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(37.48619, 126.925621),
        zoom: 15,
      }
      const map = new window.naver.maps.Map('map', mapOptions)
    }
    initMap()
  }, []);

  return (
    <div>
      <StyledMap id="map" />
    </div>
  );
}
