import './App.css';
import React, { useState, useScript } from 'react';
import { Sigma, LoadJSON, RandomizeNodePositions, RelativeSize } from 'react-sigma'
//Sigma.js for react

function App() {
  //state hooks
  const [startStation, setStart] = useState("Placeholder");
  const [endStation, setEnd] = useState("Placeholder");

  //data for graph
  let myGraph = { nodes: [{ id: "n1", label: "Alice" }, { id: "n2", label: "Rabbit" }], edges: [{ id: "e1", source: "n1", target: "n2", label: "SEES" }] };

  return (
    <div className="App">
      <header>

        {/* Header contains dropdown selection and route information*/}

          <div className="Header" style={{display:"flex",flexFlow:"row nowrap", 
          justifyContent: 'space-around', backgroundColor: '#325894', boxShadow: '5px 10px'}}>

          <h1>TrainGoWhere</h1>

          <div className="Selections" style={{ display: "flex", flexFlow: "row nowrap", justifyContent: 'space-evenly', paddingTop:"2.5%"}}>
          
          <div>
              <label htmlFor="startStationSelect"><strong>From Here:</strong></label>

              <select name="startStationSelect" id="startStationSelect" onChange={() => {
                //Get start station from drop down here and highlight on the map.
                var Select = document.getElementById("startStationSelect");
                const newStart = Select.options[Select.selectedIndex].value;
                setStart(newStart);
              }}>

              <option value="Jurong East">Jurong East</option>
              <option value="Eunos">Eunos</option>
              <option value="Dhoby Ghaut">Dhoby Ghaut</option>
              <option value="Ang Mo Kio">Ang Mo Kio</option>
            </select>
          </div>

          <div>
              <label htmlFor="endStationSelect"><strong>Go There:</strong></label>

              <select name="endStationSelect" id="endStationSelect" onChange={() => {
                //Get start station from drop down here and highlight on the map.
                var Select = document.getElementById("endStationSelect");
                const newEnd = Select.options[Select.selectedIndex].value;
                setEnd(newEnd);}}>

              <option value="Punggol">Punggol</option>
              <option value="Boon Lay">Boon Lay</option>
              <option value="Newton">Newton</option>
              <option value="Changi Airport">Changi Airport</option>
            </select>
          </div>
          </div>

        </div>

        
        <div className="RouteDisplay" style={{ backgroundColor: '#325894', paddingBottom:'1%'}}>
          Suggested routes will show up here.
        </div>
        <div>

        </div>
      </header>

      <main>
        {/* Map container contains zoomable map using sigmaJS*/}
        <div style={{ display: "flex", flexFlow: "row nowrap",}}>
        <div className="mapContainer" style={{ height: '45vw', width: '70%', backgroundColor:'#572759'}}>
            <h1>Start Station: {" "}</h1>
            {startStation || "<placeholder>"}
            <h1>End Station: {" "}</h1>
            {endStation || "<placeholder>"}

            <Sigma graph={myGraph} settings={{ drawEdges: true, clone: false, height: "300px", width:"100px"}}>
              <RelativeSize initialSize={15} />
              <RandomizeNodePositions />
            </Sigma>

        </div>
          <div className="infoContainer" style={{ height: '45vw', width: '30%', backgroundColor: '#a83232' }}>
          <h1>Click on station to get info</h1>
        </div>

        </div>


        
      </main>
    </div>
  );
}

export default App;
