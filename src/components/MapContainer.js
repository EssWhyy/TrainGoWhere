import React from 'react';

function MapContainer({selectedStart, selectedEnd}){

    return(
        <div className="mapContainer" style={{ height: '45vw', width: '70%', backgroundColor: '#572759' }}>
            <h1>Start Station: {" "} {selectedStart || "<placeholder>"}</h1> 
            <h1>End Station: {" "} {selectedEnd || "<placeholder>"}</h1>
            <img src={require('./img/mrtmap.png').default} style={{height: ''}}/>
        </div>
    );
}



export default MapContainer;