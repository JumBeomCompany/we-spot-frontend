import axios from 'axios';
import React, { useEffect } from 'react'
import * as ReactDOMServer from 'react-dom/server';
import { useQuery } from 'react-query';
import styled from 'styled-components'
import CoupleInfoWindow from './CoupleInfoWindow';

const StyledMap = styled.div`width: 100vw; height: 100vh;`

export default function CoupleMap({ setIsClickedMarker }: any) {
  const { data, isLoading, isSuccess } = useQuery<any>('getMarker', async () => {
    const response = await axios.get('http://13.124.139.218:8080/api/v1/markers/1')
    return response.data;
  }, {})

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

    data?.data?.forEach((item:any) => {
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
  }, [data])

  return (
    <StyledMap id="map" />
  );
}
