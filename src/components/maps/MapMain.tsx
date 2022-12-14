import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';
import CoupleMap from './CoupleMap';
import MarkerMngMenu from './MarkerMngMenu';
import AddMarkerMngModal from './AddMarkerModal';
import EditMarkerModal from './EditMarkerModal';

const MapContainer = styled.div`
  display: absolute;
  flex: 1;
  height: 100%;
  width: 100%;
`

function MapMain() {
  const [isMarkerMngMenuOpen, setIsMarkerMngMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [MarkerMngMenuType, setMarkerMngMenuType] = useState()
  const [clickedPosition, setClickedPosition] = useState()

  const { data, isLoading, isSuccess } = useQuery<any>('getMarker', async () => {
    const response = await axios.get('http://3.37.26.147:8080/api/v1/markers?userId=1')
    return response.data;
  }, {
    staleTime: 30000,
  })

  const handleClickMap = (type:any) => {
    if (type === 'map' || type === 'marker') {
      setMarkerMngMenuType(type)
    }
  }

  return (
    <MapContainer>
      <CoupleMap markerData={data} handleClickMap={handleClickMap} setIsMarkerMngMenuOpen={setIsMarkerMngMenuOpen} setClickedPosition={setClickedPosition} />
      {isMarkerMngMenuOpen && <MarkerMngMenu setIsModalOpen={setIsModalOpen} setIsEditModalOpen={setIsEditModalOpen} MarkerMngMenuType={MarkerMngMenuType} />}
      {isModalOpen && <AddMarkerMngModal clickedPosition={clickedPosition} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
      {isEditModalOpen && <EditMarkerModal clickedPosition={clickedPosition} isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} />}
    </MapContainer>
  )
}

export default MapMain;
