import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function InfoContainer({showStationInfo}){
    return (
        <div className="infoContainer" style={{ height: '60vw', width: '30%', backgroundColor: '#a83232' }}>
            <h1>{" "} {showStationInfo || "<Click on Station Node For More Info>"}</h1>
            <img src = {require('./img/placeholder.jpg').default} style = {{height: '20%'}}/>
            <h2>Suggested Places</h2>
            <Dropdown style = {{paddingTop: '5%', paddingBottom: '5%'}}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Shopping and Attractions
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Place 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Place 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Place 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ paddingBottom: '5%' }}>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    Food Outlets
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Place 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Place 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Place 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ paddingBottom: '5%' }}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Public Facilities
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Place 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Place 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Place 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ paddingBottom: '5%' }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Parks and Gardens
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Place 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Place 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Place 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ paddingBottom: '5%' }}>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Schools and Institutions
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Place 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Place 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Place 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ paddingBottom: '5%' }}>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    Housing 
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Place 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Place 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Place 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default InfoContainer;