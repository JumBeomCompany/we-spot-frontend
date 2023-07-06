import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';
import CoupleMap from './CoupleMap';
import MarkerMngMenu from './MarkerMngMenu';
import AddMarkerMngModal from './AddMarkerModal';
import EditMarkerModal from './EditMarkerModal';
import { useAtom } from 'jotai';
import { 
  isAddMarkerModalOpenAtom,
  isEditMarkerModalOpenAtom,
  isMarkerMngMenuOpenAtom,
  markerMngMenuTypeAtom
} from '../../atom/index';

const MapContainer = styled.div`
  width: 100%;
`

function MapMain() {
  const [isAddMarkerModalOpen] = useAtom(isAddMarkerModalOpenAtom);
  const [isEditMarkerModalOpen] = useAtom(isEditMarkerModalOpenAtom);
  const [isMarkerMngMenuOpen] = useAtom(isMarkerMngMenuOpenAtom);
  const [, setMarkerMngMenuTypeAtom] = useAtom(markerMngMenuTypeAtom);

  const { data, isLoading, isSuccess } = useQuery<any>('getMarker', async () => {
    const response = await axios.get('http://3.37.26.147:8080/api/v1/markers?userId=1')
    return response.data;
  }, {
    staleTime: 30000,
  })

  const handleClickMap = (type:any) => {
    if (type === 'map' || type === 'marker') {
      setMarkerMngMenuTypeAtom(type)
    }
  }

  return (
    <MapContainer>
      <CoupleMap markerData={data} handleClickMap={handleClickMap} />
      {isMarkerMngMenuOpen && <MarkerMngMenu />}
      {isAddMarkerModalOpen && <AddMarkerMngModal/>}
      {isEditMarkerModalOpen && <EditMarkerModal />}
    </MapContainer>
  )
}

export default MapMain;
