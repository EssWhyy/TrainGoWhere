import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {Cart, Tree, Book, Building, House, Star, Bank, Triangle} from 'react-bootstrap-icons';
import amenities from './jsondata/amenities.json';
import stationCodes from './jsondata/stationCodes.json';

function InfoContainer({StationInfo, setActivePlace}){
    //hooks for station directory
    const [attractions, setAttractions] = useState([]);
    const [shopping, setShopping] = useState([]);
    const [community, setCommunity] = useState([]);
    const [schools, setSchools] = useState([]);
    const [parks, setParks] = useState([]);
    const [worship, setWorship] = useState([]);
    const [residences, setResidences] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [stationImage, setStationImage] = useState("https://via.placeholder.com/400x300")

    //on station select, update station directory.
    useEffect(() => {
        

        const code = stationCodes[StationInfo];

        var listings = amenities[code];

        try{
            var listedAttractions = listings.Attractions;
            setAttractions(listedAttractions);
        } catch {
            console.log("error getting attractions")
            setAttractions([])
        } 


        try {
            var listedShopping = listings["Shopping & Dining"];
            setShopping(listedShopping);
        } catch {
            console.log("error getting shopping")
            setShopping([])
        }

        try {
            var listedCommunity = listings["Community Facilities"];
            setCommunity(listedCommunity);
        } catch {
            console.log("error getting community")
            setCommunity([])
        }

        try {
            var listedSchools = listings["Schools & Public Institutions"];
            setSchools(listedSchools);
        } catch {
            console.log("error getting schools")
            setSchools([])
        }

        try {
            var listedParks = listings["Parks & Gardens"];
            setParks(listedParks);
        } catch {
            console.log("error getting parks")
            setParks([])
        }

        try {
            var listedWorship = listings["Places of Worship"];
            setWorship(listedWorship);
        } catch {
            console.log("error getting worship")
            setWorship([])
        }

        try {
            var listedResidences = listings["Offices & Residences"];
            setResidences(listedResidences);
        } catch {
            console.log("error getting residences")
            setResidences([])
        }

        try {
            var listedHotels = listings["Hotels & Hostels"];
            setHotels(listedHotels);
        } catch {
            console.log("error getting hotels")
            setHotels([])
        }
    
        try {
            var photo = listings["Picture"][0];
            setStationImage(photo)
        } catch{
            console.log("error setting pic")
        }
    }, [StationInfo])

    //Contains Info About Station and Nearby Places
    return (
        <div className="infoContainer" style={{ height: '75vw', width: '30%', backgroundColor: '#2f2ba1' }}>
            <h1>{StationInfo}</h1>
            <img src = {stationImage} alt = "Station Thumbnail" style = {{height: '20%'}}/>
            
            
            <h2>Suggested Places</h2>
            <Dropdown style={{ padding: '5%', paddingBottom: '10%'}} block>
                <Dropdown.Toggle variant="danger" id="dropdown-basic" block>
                    <Star/> Attractions and Landmarks
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {attractions.map((e) =>{
                        return <Dropdown.Item onClick={() =>{setActivePlace(e[1])}}>{e[0]}</Dropdown.Item>;
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ padding: '5%', paddingTop: '0%', paddingBottom: '10%'}} block>
                <Dropdown.Toggle variant="danger" id="dropdown-basic" block>
                    <Cart/> Shopping and Dining
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {shopping.map((e) => {
                        return <Dropdown.Item onClick={() => { setActivePlace(e[1]) }}>{e[0]}</Dropdown.Item>;
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ padding: '5%', paddingTop: '0%', paddingBottom: '10%'}} block>
                <Dropdown.Toggle variant="primary" id="dropdown-basic" block>
                    <Bank/> Community Facilities
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {community.map((e) => {
                        return <Dropdown.Item onClick={() => { setActivePlace(e[1]) }}>{e[0]}</Dropdown.Item>;
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ padding: '5%', paddingTop: '0%', paddingBottom: '10%'}} block>
                <Dropdown.Toggle variant="primary" id="dropdown-basic" block>
                    <Book/> Schools and Institutions
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {schools.map((e) => {
                        return <Dropdown.Item onClick={() => { setActivePlace(e[1]) }}>{e[0]}</Dropdown.Item>;
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ padding: '5%', paddingTop: '0%', paddingBottom: '10%'}} block>
                <Dropdown.Toggle variant="success" id="dropdown-basic" block>
                    <Tree/>Parks and Gardens
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {parks.map((e) => {
                        return <Dropdown.Item onClick={() => { setActivePlace(e[1]) }}>{e[0]}</Dropdown.Item>;
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ padding: '5%', paddingTop: '0%', paddingBottom: '10%'}} block>
                <Dropdown.Toggle variant="success" id="dropdown-basic" block>
                    <Triangle/> Places of Worship
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {worship.map((e) => {
                        return <Dropdown.Item onClick={() => { setActivePlace(e[1]) }}>{e[0]}</Dropdown.Item>;
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown style={{ padding: '5%', paddingTop: '0%', paddingBottom: '10%' }} block>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" block>
                    <Building/> Offices and Residences
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {residences.map((e) => {
                        return <Dropdown.Item onClick={() => { setActivePlace(e[1]) }}>{e[0]}</Dropdown.Item>;
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ padding: '5%', paddingTop: '0%', paddingBottom: '10%' }} block>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" block>
                    <House/> Hotels and Hostels
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {hotels.map((e) => {
                        return <Dropdown.Item onClick={() => { setActivePlace(e[1]) }}>{e[0]}</Dropdown.Item>;
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default InfoContainer;