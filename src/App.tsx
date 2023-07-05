import React from 'react'
import styled from 'styled-components';
import BottomNav from './components/common/BottomNav';
import Header from './components/common/Header';
import MapMain from './components/maps/MapMain';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <MapMain />
      <BottomNav />
    </AppContainer>
  );
}

export default App;
