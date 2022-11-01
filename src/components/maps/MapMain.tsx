import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledMap = styled.div`width: 90%; height: 500px; overflow: visible;`

export default function MapMain() {
  useEffect(() => {
    const initMap = () => {
      const mapOptions = {
        zoom: 10,
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
