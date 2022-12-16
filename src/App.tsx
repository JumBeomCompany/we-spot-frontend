import React from 'react'
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import MapMain from './components/maps/MapMain';

function App() {
  return (
    <div>
      <Header />
      <main>
        <MapMain />
      </main>
      <Footer />
    </div>
  );
}

export default App;
