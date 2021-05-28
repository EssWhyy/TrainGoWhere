import './App.css';
import React, { useState, useScript } from 'react';
import StationSelection from "./components/StationSelection";
import RouteDisplay from "./components/RouteDisplay";
import MapContainer from "./components/MapContainer";
import InfoContainer from "./components/InfoContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  //passing a hook to link up 2 sibling components
  const [selectedStart, selectStart] = useState("placeholder");
  const [selectedEnd, selectEnd] = useState("placeholder");

  const [showStationInfo, setActiveStation] = useState("Station Info");

  return (
    <div className="App">

      <header>
      
      <StationSelection selectStart = {selectStart} selectEnd = {selectEnd}/>
      <RouteDisplay/>

      </header>

      <main>
        <div style={{ display: "flex", flexFlow: "row nowrap" }}>
          
          <MapContainer selectedStart = {selectedStart} selectedEnd = {selectedEnd} setActiveStation = {setActiveStation}/>
          <InfoContainer showStationInfo = {showStationInfo} />

        </div>
      </main>
    </div>
  );
}

export default App;
