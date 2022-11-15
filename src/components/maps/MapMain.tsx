import React, { useState } from 'react';
import CoupleMap from './CoupleMap';
import MarkerMngMenu from './MarkerMngMenu';

function MapMain() {
  const [isClickedMarker, setIsClickedMarker] = useState(false)

  return (
    <div>
      <CoupleMap setIsClickedMarker={setIsClickedMarker} />
      {isClickedMarker && <MarkerMngMenu />}
    </div>
  )
}

export default MapMain;
