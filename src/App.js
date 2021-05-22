import './App.css';
import React, { useState, useScript } from 'react';
import StationSelection from "./components/StationSelection";
import RouteDisplay from "./components/RouteDisplay";
import MapContainer from "./components/MapContainer";
import InfoContainer from "./components/InfoContainer";


function App() {

  const [station, selectStation] = useState([]);
  

  return (
    <div className="App">

      <header>
      
      <StationSelection/>
      <RouteDisplay/>

      </header>

      <main>
        <div style={{ display: "flex", flexFlow: "row nowrap" }}>
          
          <MapContainer />
          <InfoContainer />

        </div>
      </main>
    </div>
  );
}

export default App;
