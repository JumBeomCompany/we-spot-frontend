import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledMap = styled.div`width: 80vw; height: 40vw;`

export default function CoupleMap() {
  const sampleData = [
    { latitude: 37.48619, longitude: 126.925621 },
    { latitude: 37.47919, longitude: 126.923621 },
    { latitude: 37.48319, longitude: 126.926921 },
  ]
  useEffect(() => {
    const { naver } = window
    const mapOptions = {
      center: new naver.maps.LatLng(37.48619, 126.925621),
      zoom: 15,
    }

    const map = new naver.maps.Map('map', mapOptions)
    const contentElements = '<div class="infowindow-container"><b>테스트 중입니다</b></div>';
    const markers:naver.maps.Marker | any = []
    const infowindows:naver.maps.InfoWindow | any = []
    const listeners:any = []

    sampleData.forEach((item) => {
      markers.push(new naver.maps.Marker({
        // position: new naver.maps.LatLng(data.latitude, data.longitude),
        position: new naver.maps.LatLng(item.latitude, item.longitude),
        map: map,
      }))
      infowindows.push(new naver.maps.InfoWindow({
        content: contentElements,
      }))
    })

    markers.forEach((marker:any, index: any) => {
      listeners.push(naver.maps.Event.addListener(marker, 'click', (e) => {
        if (infowindows[index].getMap()) {
          infowindows[index].close();
        } else {
          infowindows[index].open(map, marker);
        }
      }))
    })

    return () => {
      listeners.forEach((listener: any) => {
        naver.maps.Event.removeListener(listener)
      })
    }
  }, [])

  return (
    <StyledMap id="map" />
  );
}
