import React from 'react';

var file = require('./updates.json');
var trainUpdates = file.value;
var status = trainUpdates.Status;
var messages = [];
var affectedStations = [];

//if message code 1, then there are no train faults.
if (status == '1'){
    messages = [{ "Content": "Train Services All Operational"}];
} else{
    messages = trainUpdates.Message[0]; //get latest message only.
    affectedStations = trainUpdates.AffectedSegments.Stations;
}
//else for code 2, highlight the faulty line(s) and affected station(s)
//pass affected stations to mapContainer to update route calculations

function RouteDisplay(){
    const listItems = messages.map((message) =>
        <h4>{message.Content}</h4>
    );

    return (
        <ul className="RouteDisplay" style={{ backgroundColor: (status == '1') ? '#1fdb51' : '#f5260f', paddingTop: '2%'}}>
            {listItems}
        </ul>);
}

export default RouteDisplay;