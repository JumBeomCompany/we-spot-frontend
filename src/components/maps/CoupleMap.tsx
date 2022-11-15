import React, { useEffect } from 'react'
import * as ReactDOMServer from 'react-dom/server';
import styled from 'styled-components'
import CoupleInfoWindow from './CoupleInfoWindow';

const StyledMap = styled.div`width: 100vw; height: 100vh;`

export default function CoupleMap({ setIsClickedMarker }: any) {
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
        content: ReactDOMServer.renderToString(<CoupleInfoWindow />),
      }))
    })

    markers.forEach((marker:any, index: any) => {
      listeners.push(naver.maps.Event.addListener(marker, 'click', (e) => {
        if (infowindows[index].getMap()) {
          infowindows[index].close();
          setIsClickedMarker(false)
        } else {
          infowindows[index].open(map, marker);
          setIsClickedMarker(true)
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
