import React from 'react'
import styled from 'styled-components';
import BottomNav from './components/common/BottomNav';
import Header from './components/common/Header';
import MapMain from './components/maps/MapMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedMain from './components/feed/FeedMain';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<MapMain />} />
            <Route path="/feed" element={<FeedMain />} />
          </Routes>
        <BottomNav />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
