import React, { useState } from 'react';
import CoupleMap from './CoupleMap';
import MarkerMngMenu from './MarkerMngMenu';
import AddMarkerMngModal from './AddMarkerModal';

function MapMain() {
  const [isMarkerMngMenuOpen, setIsMarkerMngMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [MarkerMngMenuType, setMarkerMngMenuType] = useState()
  const [clickedPosition, setClickedPosition] = useState()

  const handleClickMap = (type:any) => {
    if (type === 'map' || type === 'marker') {
      setMarkerMngMenuType(type)
    }
  }

  return (
    <div>
      <CoupleMap handleClickMap={handleClickMap} setIsMarkerMngMenuOpen={setIsMarkerMngMenuOpen} setClickedPosition={setClickedPosition} />
      {isMarkerMngMenuOpen && <MarkerMngMenu setIsModalOpen={setIsModalOpen} MarkerMngMenuType={MarkerMngMenuType} />}
      {isModalOpen && <AddMarkerMngModal clickedPosition={clickedPosition} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </div>
  )
}

export default MapMain;
