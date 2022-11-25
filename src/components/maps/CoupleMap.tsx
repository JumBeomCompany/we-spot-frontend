import React, { useEffect, useRef } from 'react'
import * as ReactDOMServer from 'react-dom/server';
import styled from 'styled-components'
import CoupleInfoWindow from './CoupleInfoWindow';

const StyledMap = styled.div`width: 100vw; height: 100vh;`

export default function CoupleMap({
  markerData, handleClickMap, setIsMarkerMngMenuOpen, setClickedPosition,
}: any) {
  const mapElement = useRef<naver.maps.Map | null>(null)

  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.48619, 126.925621),
      zoom: 15,
    }

    mapElement.current = new naver.maps.Map('map', mapOptions)
  }, [])

  useEffect(() => {
    const { naver } = window
    const markers:naver.maps.Marker | any = []
    const infowindows:naver.maps.InfoWindow | any = []
    const listeners:any = []
    let mapClickListener:any = null

    if (mapElement.current) {
      const currentMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(0, 0),
        map: mapElement.current,
      })

      // 마커, infowindow 생성
      markerData?.data?.forEach((item:any) => {
        if (!mapElement.current) return
        markers.push(new naver.maps.Marker({
          position: new naver.maps.LatLng(item.latitude, item.longitude),
          map: mapElement.current,
        }))
        infowindows.push(new naver.maps.InfoWindow({
          content: ReactDOMServer.renderToString(<CoupleInfoWindow />),
        }))
      })

      // 마커에 이벤트리스너 달기
      markers.forEach((marker:any, index: any) => {
        listeners.push(naver.maps.Event.addListener(marker, 'click', (e) => {
          if (infowindows[index].getMap()) {
            infowindows[index].close();
            setIsMarkerMngMenuOpen(false)
          } else {
            infowindows[index].open(mapElement.current, marker);
            setIsMarkerMngMenuOpen(true)
          }
          handleClickMap('map')
          currentMarker.setPosition(new naver.maps.LatLng(0, 0))
        }))
      })

      // 지도 특정 위치 클릭 시 해당 위치에 마커 노출
      mapClickListener = naver.maps.Event.addListener(mapElement.current, 'click', (e) => {
        currentMarker.setPosition(e.coord)
        handleClickMap('marker')
        setIsMarkerMngMenuOpen(true)
        setClickedPosition({ latitude: e.coord.y, longitude: e.coord.x })
      })
    }

    return () => {
      listeners.forEach((listener: any) => {
        naver.maps.Event.removeListener(listener)
      })
      naver.maps.Event.removeListener(mapClickListener)
    }
  }, [markerData])

  return (
    <StyledMap id="map" />
  );
}
