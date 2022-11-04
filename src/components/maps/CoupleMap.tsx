import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledMap = styled.div`width: 80vw; height: 40vw;`

export default function CoupleMap() {
  const mapRef = useRef<HTMLElement | null | any>(null)

  useEffect(() => {
    const { naver } = window
    const mapOptions = {
      center: new naver.maps.LatLng(37.48619, 126.925621),
      zoom: 15,
    }

    mapRef.current = new naver.maps.Map('map', mapOptions)

    return () => {
      // todo destroy
    }
  }, [])

  return (
    <div>
      <StyledMap id="map" />
    </div>
  );
}
