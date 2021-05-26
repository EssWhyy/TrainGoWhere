import React from 'react';

function InfoContainer({showStationInfo}){
    return (
        <div className="infoContainer" style={{ height: '60vw', width: '30%', backgroundColor: '#a83232' }}>
            <h1>Click on station to get info</h1>
            <h1>{" "} {showStationInfo || "<No Station Selected>"}</h1>
        </div>
    );
}

export default InfoContainer;