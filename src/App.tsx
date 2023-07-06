import React from 'react'
import { Provider } from 'jotai';
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
    <Provider>
      <AppContainer>
      <Header />
      <MapMain />
      <BottomNav />
      </AppContainer>
    </Provider>
  );
}

export default App;
