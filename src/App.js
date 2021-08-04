import './App.css';
import React, {useState} from 'react';
import Header from "./components/Header";
import RouteDisplay from "./components/RouteDisplay";
import MapContainer from "./components/MapContainer";
import InfoContainer from "./components/InfoContainer";
import PlaceDetailBox from "./components/PlaceDetailBox"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [StationInfo, setActiveStation] = useState("Station Info");
  const [PlaceInfo, setActivePlace] = useState("");

  return (
    <div className="App">

      <header>
      
      <Header/>
      <RouteDisplay/>
      <PlaceDetailBox PlaceInfo={PlaceInfo} setActivePlace={setActivePlace}/>
      </header>

      <main>
        <div style={{ display: "flex", flexFlow: "row nowrap" }}>
          
          <MapContainer setActiveStation = {setActiveStation}/>
          <InfoContainer  StationInfo = {StationInfo} setActivePlace ={setActivePlace} />
          
        </div>
      </main>
    </div>
  );
}

export default App;
