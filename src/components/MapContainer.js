import React from 'react';

function MapContainer(){

    return(
        <div className="mapContainer" style={{ height: '45vw', width: '70%', backgroundColor: '#572759' }}>
            <h1>Start Station: {" "}</h1>
            <h1>End Station: {" "}</h1>
            <img src={require('./img/mrtmap.png').default} />
        </div>
    );
}



export default MapContainer;