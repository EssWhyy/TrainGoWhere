import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function InfoContainer({showStationInfo}){
    //Contains Info About Station and Nearby Places
    return (
        <div className="infoContainer" style={{ height: '60vw', width: '30%', backgroundColor: '#a83232' }}>
            <h1>{" "} {showStationInfo || "<Click on Station Node For More Info>"}</h1>
            <img src = {require('./img/placeholder.jpg').default} alt = "Station Thumbnail" style = {{height: '20%'}}/>
            <h2>Suggested Places</h2>
            <Dropdown style = {{padding: '5%'}} block>
                <Dropdown.Toggle variant="primary" id="dropdown-basic" block>
                    Attractions
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Really Long Sentence Wow</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Place 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Place 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ padding: '5%', paddingTop: '0%'}} block>
                <Dropdown.Toggle variant="warning" id="dropdown-basic" block>
                    Shopping
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Place 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Place 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Place 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ padding: '5%', paddingTop: '0%' }} block>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" block>
                    Community Facilities
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Place 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Place 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Place 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ padding: '5%', paddingTop: '0%' }} block>
                <Dropdown.Toggle variant="success" id="dropdown-basic" block>
                    Parks and Gardens
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Place 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Place 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Place 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ padding: '5%', paddingTop: '0%' }} block>
                <Dropdown.Toggle variant="info" id="dropdown-basic" block>
                    Schools and Institutions
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Place 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Place 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Place 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ padding: '5%', paddingTop: '0%' }} block>
                <Dropdown.Toggle variant="danger" id="dropdown-basic" block>
                    Offices and Residences
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