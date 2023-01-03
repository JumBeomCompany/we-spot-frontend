import React from 'react'
import styled from 'styled-components';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import MapMain from './components/maps/MapMain';

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <MapMain />
      <Footer />
    </AppContainer>
  );
}

export default App;
