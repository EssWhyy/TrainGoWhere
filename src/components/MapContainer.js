import React from 'react';
import mapCoordinates from './mapCoordinates.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {useState} from 'react';
import dict from './jsondata/stationCodes.json';
import edgesDict from './jsondata/edgesDict.json';
import graph from './jsondata/graph.json';

function MapContainer({setActiveStation}){
    // HOOKS
    const [start, setStart] = useState("Start Station");
    const [end, setEnd] = useState("End Station");
    const [popup, setPopup] = useState("");
    const [trainRouteResults, showTrainRouteResults] = useState("");
    const [fareType, setFareType] = useState("adultCard");

    // AUX FUNCTION TO CHANGE OPACITY OF EDGES TO 0.7
    // MEANT TO HIGHLIGHT INTENDED PATH FROM AN ARRAY OF EDGES
    const changeElement = (id) => {
        for (let i of id) {
            let el = document.getElementById(i);//
            el.style.opacity = 0.7; // TOGGLE TO 0
        }
    }

    // AUX FUNCTION TO RESET OPACITY OF EDGES TO 0
    const resetElement = () => {
        for (let i in edgesDict) {
            let el = document.getElementById(i); //
            el.style.opacity = 0;
        }
    }

    const shortestDistanceNode = (distances, visited) => {
        let shortest = null;

        for (let node in distances) {
            let currentIsShortest =
                shortest === null || distances[node] < distances[shortest];
            if (currentIsShortest && !visited.includes(node)) {
                shortest = node;
            }
        }
        return shortest;
    };

    // MAIN METHOD TO FIND SHORTEST PATH FROM startNode to endNode
    const findShortestPath = (startNode, endNode) => {
        // create new object for recording distances from the start node
        let distances = {};
        distances[endNode] = "Infinity";
        distances = Object.assign(distances, graph[startNode]);

        // track paths
        let parents = { endNode: null };
        for (let child in graph[startNode]) {
            parents[child] = startNode;
        }

        // track visited nodes 
        let visited = [];

        // find nearest node
        let node = shortestDistanceNode(distances, visited);

        // for that node
        while (node) {
            // find its distance from the start node & its child nodes
            let distance = distances[node];
            let children = graph[node];
            // for each of those child nodes
            for (let child in children) {
                // make sure each child node is not the start node
                if (String(child) === String(startNode)) {
                    continue;
                } else {
                    // save the distance from the start node to the child node
                    let newdistance = distance + children[child];
                    // if there's no recorded distance from the start node to the child node in the distances object
                    // or if the recorded distance is shorter than the previously stored distance from the start node to the child node
                    // save the distance to the object
                    // record the path
                    if (!distances[child] || distances[child] > newdistance) {
                        distances[child] = newdistance;
                        parents[child] = node;
                    }
                }
            }
            // move the node to the visited set
            visited.push(node);
            // move to the nearest neighbor node
            node = shortestDistanceNode(distances, visited);
        }

        // using the stored paths from start node to end node
        // record the shortest path
        let shortestPath = [endNode];
        let parent = parents[endNode];
        while (parent) {
            shortestPath.push(parent);
            parent = parents[parent];
        }
        shortestPath.reverse();


        // return the shortest path from start node to end node & its distance
        let results = {
            distance: distances[endNode],
            path: shortestPath,
            fare: cost(distances[endNode], fareType)
        };

        return results;
    };

    // AUX METHOD TO CONVERT INPUT (STATION NAME) FROM MAP INTO  
    // VALID INPUT FOR MAIN METHOD BELOW (STATION CODE)
    const shortestPathName = (startStn, endStn) => {
        let startCode = null;
        let endCode = null;

        for (let name in dict) {
            if (startStn === name) {
                startCode = dict[name];
            }
            if (endStn === name) {
                endCode = dict[name];
            }
        }
        return findShortestPath(startCode, endCode);
    }

    

    // AUX METHOD: FARE CALCULATOR 
    const cost = (rate, fareGroup) => {
        if (fareGroup === 'adultCard') {
            if (rate <= 3.2) {
                rate = 0.92;
            } else if (rate <= 4.2) {
                rate = 1.02;
            } else if (rate <= 5.2) {
                rate = 1.12;
            } else if (rate <= 6.2) {
                rate = 1.22;
            } else if (rate <= 7.2) {
                rate = 1.31;
            } else if (rate <= 8.2) {
                rate = 1.38;
            } else if (rate <= 9.2) {
                rate = 1.44;
            } else if (rate <= 10.2) {
                rate = 1.48;
            } else if (rate <= 11.2) {
                rate = 1.52;
            } else if (rate <= 12.2) {
                rate = 1.56;
            } else if (rate <= 13.2) {
                rate = 1.60;
            } else if (rate <= 14.2) {
                rate = 1.64;
            } else if (rate <= 15.2) {
                rate = 1.68;
            } else if (rate <= 16.2) {
                rate = 1.72;
            } else if (rate <= 17.2) {
                rate = 1.76;
            } else if (rate <= 18.2) {
                rate = 1.80;
            } else if (rate <= 19.2) {
                rate = 1.84;
            } else if (rate <= 20.2) {
                rate = 1.87;
            } else if (rate <= 21.2) {
                rate = 1.90;
            } else if (rate <= 22.2) {
                rate = 1.93;
            } else if (rate <= 23.2) {
                rate = 1.96;
            } else if (rate <= 24.2) {
                rate = 1.98;
            } else if (rate <= 25.2) {
                rate = 2.00;
            } else if (rate <= 26.2) {
                rate = 2.02;
            } else if (rate <= 27.2) {
                rate = 2.03;
            } else if (rate <= 28.2) {
                rate = 2.04;
            } else if (rate <= 29.2) {
                rate = 2.05;
            } else if (rate <= 30.2) {
                rate = 2.06;
            } else if (rate <= 31.2) {
                rate = 2.07;
            } else if (rate <= 32.2) {
                rate = 2.08;
            } else if (rate <= 33.2) {
                rate = 2.09;
            } else if (rate <= 34.2) {
                rate = 2.10;
            } else if (rate <= 35.2) {
                rate = 2.11;
            } else if (rate <= 36.2) {
                rate = 2.12;
            } else if (rate <= 37.2) {
                rate = 2.13;
            } else if (rate <= 38.2) {
                rate = 2.14;
            } else if (rate <= 39.2) {
                rate = 2.15;
            } else if (rate <= 40.2) {
                rate = 2.16;
            } else {
                rate = 2.17;
            }
            return rate;


        } else if (fareGroup === 'wtcs') {
            if (rate <= 3.2) {
                rate = 0.68;
            } else if (rate <= 4.2) {
                rate = 0.76;
            } else if (rate <= 5.2) {
                rate = 0.84;
            } else if (rate <= 6.2) {
                rate = 0.92;
            } else if (rate <= 7.2) {
                rate = 0.99;
            } else if (rate <= 8.2) {
                rate = 1.05;
            } else if (rate <= 9.2) {
                rate = 1.11;
            } else if (rate <= 10.2) {
                rate = 1.14;
            } else if (rate <= 11.2) {
                rate = 1.17;
            } else if (rate <= 12.2) {
                rate = 1.20;
            } else if (rate <= 13.2) {
                rate = 1.23;
            } else if (rate <= 14.2) {
                rate = 1.26;
            } else if (rate <= 15.2) {
                rate = 1.29;
            } else if (rate <= 16.2) {
                rate = 1.32;
            } else if (rate <= 17.2) {
                rate = 1.35;
            } else if (rate <= 18.2) {
                rate = 1.38;
            } else if (rate <= 19.2) {
                rate = 1.41;
            } else if (rate <= 20.2) {
                rate = 1.44;
            } else if (rate <= 21.2) {
                rate = 1.47;
            } else if (rate <= 22.2) {
                rate = 1.50;
            } else if (rate <= 23.2) {
                rate = 1.53;
            } else if (rate <= 24.2) {
                rate = 1.55;
            } else if (rate <= 25.2) {
                rate = 1.56;
            } else if (rate <= 26.2) {
                rate = 1.57;
            } else if (rate <= 27.2) {
                rate = 1.58;
            } else if (rate <= 28.2) {
                rate = 1.59;
            } else if (rate <= 29.2) {
                rate = 1.60;
            } else if (rate <= 30.2) {
                rate = 1.61;
            } else if (rate <= 31.2) {
                rate = 1.62;
            } else if (rate <= 32.2) {
                rate = 1.63;
            } else if (rate <= 33.2) {
                rate = 1.64;
            } else if (rate <= 34.2) {
                rate = 1.65;
            } else if (rate <= 35.2) {
                rate = 1.66;
            } else if (rate <= 36.2) {
                rate = 1.67;
            } else if (rate <= 37.2) {
                rate = 1.68;
            } else if (rate <= 38.2) {
                rate = 1.69;
            } else if (rate <= 39.2) {
                rate = 1.70;
            } else if (rate <= 40.2) {
                rate = 1.71;
            } else {
                rate = 1.72;
            }
            return rate;


        } else if (fareGroup === 'adultCash') {
            if (rate <= 3.2) {
                rate = 1.70;
            } else if (rate <= 6.2) {
                rate = 1.90;
            } else if (rate <= 9.2) {
                rate = 2.10;
            } else if (rate <= 11.2) {
                rate = 2.30;
            } else if (rate <= 15.2) {
                rate = 2.50;
            } else if (rate <= 19.2) {
                rate = 2.60;
            } else if (rate <= 23.2) {
                rate = 2.70;
            } else {
                rate = 2.80;
            }
            return rate;


        } else if (fareGroup === 'senior') {
            if (rate <= 3.2) {
                rate = 0.59;
            } else if (rate <= 4.2) {
                rate = 0.66;
            } else if (rate <= 5.2) {
                rate = 0.73;
            } else if (rate <= 6.2) {
                rate = 0.80;
            } else if (rate <= 7.2) {
                rate = 0.86;
            } else {
                rate = 0.92;
            }
            return rate;
        }

        else if (fareGroup === 'student') {
            if (rate <= 3.2) {
                rate = 0.42;
            } else if (rate <= 4.2) {
                rate = 0.47;
            } else if (rate <= 5.2) {
                rate = 0.52;
            } else if (rate <= 6.2) {
                rate = 0.57;
            } else if (rate <= 7.2) {
                rate = 0.60;
            } else {
                rate = 0.63;
            }
            return rate;
        }

    };


    const showRouteDetails = () =>{
        resetElement();
        let trail = [];
        let edgesArr = []; // NEW: To store path of edges
        // const img = document.querySelector('e1id'); // NEW
        var results = ""
        var startStn = start;
        var endStn = end;

        if (startStn === "" || startStn === "Start Station") {
            results = "Please select an origin.";
        } else if (endStn === "" || endStn === "End Station") {
            results = "Please select a destination.";
        } else if (startStn === endStn) {
            results = "Your origin and destination have to be different!";
        } else {
            let interim = shortestPathName(startStn, endStn);

            
                var rounded1 = interim.distance.toFixed(1);
                var rounded2 = interim.fare.toFixed(2);
                results = `Your journey will be ${rounded1}km long and cost $${rounded2}.`;
            
            // Assign interim.path containing station sequence to 'trail'
                trail = interim.path;

        }

        // NEW ALGO TO RETRIEVE EDGES FROM interim.path
        for (var i = 0; i < trail.length; i++) {
            for (let edge in edgesDict) {
                if (edgesDict[edge].includes(trail[i]) && edgesDict[edge].includes(trail[i + 1])) {
                    edgesArr.push(edge);
                }
            }
        }

        // EXAMPLE TO HIGHLIGHT PATH
        changeElement(edgesArr);
        showTrainRouteResults(results);
    }
    
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
        }} style={{ height: '75vw', width: '80%', backgroundColor: '#5e76bf' }}>
        <div className="mapContainer" >
        
        
            <div className="selectedStations">
                <div style ={{display:"flex", alignItems: "center"}}>
                <label for="startStn">Origin: </label>
                <input value={start} id="startStn" size="20"/>
                <label for="endStn">Destination: </label>
                <input value={end} id="endStn" size="20"/>
                        
                <button className="submit-btn" type="submit" onClick={() => showRouteDetails()} >Calculate Fare</button>
                </div>
                <label for= "commuter">Fare Type:</label>
                    <select class="fareGroups" id="commuter" onChange={(e) => {setFareType(e.target.value)}}>
                        <option value="adultCard">Adult (Card)</option>
                        <option value="adultCash">Adult (Cash)</option>
                        <option value="wtcs">Workfare Transport Concession Scheme</option>
                        <option value="senior">Senior Citizens / Persons With Disabilities</option>
                        <option value="student">Students</option>
                    </select>
            </div>
            
            <div className="directions" id="results">
                    <h3>{trainRouteResults}</h3>
            </div>

        
            <TransformWrapper>
            <TransformComponent>
                <div className="map" style={{ mapCoordinates }.default}>
                <img className="tmp" src="https://i.imgur.com/w7ReB4N.png" alt="Station map not loaded. Please refresh page" style = {{height: "50vw", width: "72vw"}}/>
                {/*Nodes for the MRT Map, clicking will trigger a popup and change the info container*/}
                <div className="nodes">
                    {/*East West Line & Changi Airport Branch Line Stations*/}
                                <button onClick={() => { setPopup("CG1 / DT35 Expo")}} className="cg1 ic-btn">O</button>
                                <button onClick={() => { setPopup("CG2 Changi Airport")}} className="cg2 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW1 Pasir Ris")}} className="ew1 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW2 / DT32 Tampines")}} className="ew2 ic-btn">O</button>
                                <button onClick={() => { setPopup("EW3 Simei")}} className="ew3 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW4 Tanah Merah")}} className="ew4 ic-btn">O</button>
                                <button onClick={() => { setPopup("EW5 Bedok")}} className="ew5 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW6 Kembangan")}} className="ew6 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW7 Eunos")}} className="ew7 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW8 / CC9 Paya Lebar")}} className="ew8 ic-btn">O</button>
                                <button onClick={() => { setPopup("EW9 Aljunied")}} className="ew9 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW10 Kallang")}} className="ew10 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW11 Lavender")}} className="ew11 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW12 / DT14 Bugis")}} className="ew12 ic-btn">O</button>
                                <button onClick={() => { setPopup("EW13 / NS25 City Hall")}} className="ew13 ic-btn">O</button>
                                <button onClick={() => { setPopup("EW14 / NS26 Raffles Place")}} className="ew14 ic-btn">O</button>
                                <button onClick={() => { setPopup("EW15 Tanjong Pagar")}} className="ew15 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW16 / NE3 Outram Park")}} className="ew16 ic-btn">O</button>
                                <button onClick={() => { setPopup("EW17 Tiong Bahru")}} className="ew17 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW18 Redhill")}} className="ew18 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW19 Queenstown")}} className="ew19 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW20 Commonwealth")}} className="ew20 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW21 / CC22 Buona Vista")}} className="ew21 ic-btn">O</button>
                                <button onClick={() => { setPopup("EW22 Dover")}} className="ew22 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW23 Clementi")}} className="ew23 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW24 / NS1 Jurong East")}} className="ew24 ic-btn">O</button>
                                <button onClick={() => { setPopup("EW25 Chinese Garden")}} className="ew25 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW26 Lakeside")}} className="ew26 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW27 Boon Lay")}} className="ew27 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW28 Pioneer")}} className="ew28 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW29 Joo Koon")}} className="ew29 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW30 Gul Circle")}} className="ew30 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW31 Tuas Central")}} className="ew31 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW32 Tuas West Road")}} className="ew32 ew-btn">O</button>
                                <button onClick={() => { setPopup("EW33 Tuas Link")}} className="ew33 ew-btn">O</button>
                    {/*North-South Line Stations*/}
                                <button onClick={() => { setPopup("NS2 Bukit Batok")}} className="ns2 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS3 Bukit Gombak")}} className="ns3 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS4 / BP1 Choa Chu Kang")}} className="ns4 ic-btn">O</button>
                                <button onClick={() => { setPopup("NS5 Yew Tee")}} className="ns5 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS7 Kranji")}} className="ns7 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS8 Marsiling")}} className="ns8 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS9 / TE2 Woodlands")}} className="ns9 ic-btn">O</button>
                                <button onClick={() => { setPopup("NS10 Admiralty")}} className="ns10 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS11 Sembawang")}} className="ns11 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS12 Canberra")}} className="ns12 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS13 Yishun")}} className="ns13 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS14 Khatib")}} className="ns14 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS15 Yio Chu Kang")}} className="ns15 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS16 Ang Mo Kio")}} className="ns16 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS17 / CC15 Bishan")}} className="ns17 ic-btn">O</button>
                                <button onClick={() => { setPopup("NS18 Braddell")}} className="ns18 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS19 Toa Payoh")}} className="ns19 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS20 Novena")}} className="ns20 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS21 / DT11 Newton")}} className="ns21 ic-btn">O</button>
                                <button onClick={() => { setPopup("NS22 Orchard")}} className="ns22 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS23 Somerset")}} className="ns23 ns-btn">O</button>
                                <button onClick={() => { setPopup("NS24 / NE6 / CC1 Dhoby Ghaut")}} className="ns24 ic-btn">O</button>
                                <button onClick={() => { setPopup("NS27 / CE2 Marina Bay")}} className="ns27 ic-btn">O</button>
                                <button onClick={() => { setPopup("NS28 Marina South Pier")}} className="ns28 ns-btn">O</button>
                    {/*North-East Line Stations*/}
                                <button onClick={() => { setPopup("NE1 / CC28 HarbourFront")}} className="ne1 ic-btn">O</button>
                                <button onClick={() => { setPopup("NE4 / DT19 Chinatown")}} className="ne4 ic-btn">O</button>
                                <button onClick={() => { setPopup("NE5 Clarke Quay")}} className="ne5 ne-btn">O</button>
                                <button onClick={() => { setPopup("NE7 / DT12 Little India")}} className="ne7 ic-btn">O</button>
                                <button onClick={() => { setPopup("NE8 Farrer Park")}} className="ne8 ne-btn">O</button>
                                <button onClick={() => { setPopup("NE9 Boon Keng")}} className="ne9 ne-btn">O</button>
                                <button onClick={() => { setPopup("NE10 Potong Pasir")}} className="ne10 ne-btn">O</button>
                                <button onClick={() => { setPopup("NE11 Woodleigh")}} className="ne11 ne-btn">O</button>
                                <button onClick={() => { setPopup("NE12 / CC13 Serangoon")}} className="ne12 ic-btn">O</button>
                                <button onClick={() => { setPopup("NE13 Kovan")}} className="ne13 ne-btn">O</button>
                                <button onClick={() => { setPopup("NE14 Hougang")}} className="ne14 ne-btn">O</button>
                                <button onClick={() => { setPopup("NE15 Buangkok")}} className="ne15 ne-btn">O</button>
                                <button onClick={() => { setPopup("NE16 Sengkang")}} className="ne16 ic-btn">O</button>
                                <button onClick={() => { setPopup("NE17 Punggol")}} className="ne17 ic-btn">O</button>
                    {/*Circle Line Stations*/}
                                <button onClick={() => { setPopup("CC2 Bras Basah")}} className="cc2 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC3 Esplanade")}} className="cc3 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC4 / DT15 Promenade")}} className="cc4 ic-btn">O</button>
                                <button onClick={() => { setPopup("CC5 Nicoll Highway")}} className="cc5 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC6 Stadium")}} className="cc6 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC7 Mountbatten")}} className="cc7 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC8 Dakota")}} className="cc8 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC10 / DT26 MacPherson")}} className="cc10 ic-btn">O</button>
                                <button onClick={() => { setPopup("CC11 Tai Seng")}} className="cc11 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC12 Bartley")}} className="cc12 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC14 Lorong Chuan")}} className="cc14 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC16 Marymount")}} className="cc16 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC17 Caldecott")}} className="cc17 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC19 / DT9 Botanic Gardens")}} className="cc19 ic-btn">O</button>
                                <button onClick={() => { setPopup("CC20 Farrer Road")}} className="cc20 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC21 Holland Village")}} className="cc21 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC23 one-north")}} className="cc23 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC24 Kent Ridge")}} className="cc24 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC25 Haw Par Villa")}} className="cc25 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC26 Pasir Panjang")}} className="cc26 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC27 Labrador Park")}} className="cc27 cc-btn">O</button>
                                <button onClick={() => { setPopup("CC28 Telok Blangah")}} className="cc28 cc-btn">O</button>
                                <button onClick={() => { setPopup("CE1 / DT16 Bayfront")}} className="ce1 ic-btn">O</button>
                    {/*Downtown Line*/}
                                <button onClick={() => { setPopup("DT1 / BP6 Bukit Panjang")}} className="dt1 ic-btn">O</button>
                                <button onClick={() => { setPopup("DT2 Cashew")}} className="dt2 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT3 Hillview")}} className="dt3 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT5 Beauty World")}} className="dt5 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT6 King Albert Park")}} className="dt6 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT7 Sixth Avenue")}} className="dt7 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT8 Tan Kah Kee")}} className="dt8 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT10 Stevens")}} className="dt10 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT13 Rochor")}} className="dt13 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT17 Downtown")}} className="dt17 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT18 Telok Ayer")}} className="dt18 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT20 Fort Canning")}} className="dt20 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT21 Bencoolen")}} className="dt21 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT22 Jalan Besar")}} className="dt22 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT23 Bendemeer")}} className="dt23 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT24 Geylang Bahru")}} className="dt24 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT25 Mattar")}} className="dt25 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT27 Ubi")}} className="dt27 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT28 Kaki Bukit")}} className="dt28 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT29 Bedok North")}} className="dt29 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT30 Bedok Reservoir")}} className="dt30 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT31 Tampines West")}} className="dt31 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT33 Tampines East")}} className="dt33 dt-btn">O</button>
                                <button onClick={() => { setPopup("DT34 Upper Changi")}} className="dt34 dt-btn">O</button>
                    {/*Thomson-East Coast Line Stations*/}
                                <button onClick={() => { setPopup("TE1 Woodlands North")}} className="te1 te-btn">O</button>
                                <button onClick={() => { setPopup("TE3 Woodlands South")}} className="te3 te-btn">O</button>
                    {/*Bukit Panjang LRT Stations*/}
                                <button onClick={() => { setPopup("BP2 South View")}} className="bp2 lrt-btn">O</button>
                                <button onClick={() => { setPopup("BP3 Keat Hong")}} className="bp3 lrt-btn">O</button>
                                <button onClick={() => { setPopup("BP4 Teck Whye")}} className="bp4 lrt-btn">O</button>
                                <button onClick={() => { setPopup("BP5 Phoenix")}} className="bp5 lrt-btn">O</button>
                                <button onClick={() => { setPopup("BP7 Petir")}} className="bp7 lrt-btn">O</button>
                                <button onClick={() => { setPopup("BP8 Pending")}} className="bp8 lrt-btn">O</button>
                                <button onClick={() => { setPopup("BP9 Bangkit")}} className="bp9 lrt-btn">O</button>
                                <button onClick={() => { setPopup("BP10 Fajar")}} className="bp10 lrt-btn">O</button>
                                <button onClick={() => { setPopup("BP11 Segar")}} className="bp11 lrt-btn">O</button>
                                <button onClick={() => { setPopup("BP12 Jelapang")}} className="bp12 lrt-btn">O</button>
                                <button onClick={() => { setPopup("BP13 Senja")}} className="bp13 lrt-btn">O</button>
                    {/*Sengkang West LRT Stations*/}
                                <button onClick={() => { setPopup("SW1 Cheng Lim")}} className="sw1 lrt-btn">O</button>
                                <button onClick={() => { setPopup("SW2 Farmway")}} className="sw2 lrt-btn">O</button>
                                <button onClick={() => { setPopup("SW3 Kupang")}} className="sw3 lrt-btn">O</button>
                                <button onClick={() => { setPopup("SW4 Thanggam")}} className="sw4 lrt-btn">O</button>
                                <button onClick={() => { setPopup("SW5 Fernvale")}} className="sw5 lrt-btn">O</button>
                                <button onClick={() => { setPopup("SW6 Layar")}} className="sw6 lrt-btn">O</button>
                                <button onClick={() => { setPopup("SW7 Tongkang")}} className="sw7 lrt-btn">O</button>
                                <button onClick={() => { setPopup("SW8 Renjong")}} className="sw8 lrt-btn">O</button>
                    {/*Sengkang East LRT Stations*/}
                                <button onClick={() => { setPopup("SE1 Compassvale")}} className="se1 lrt-btn">O</button>
                                <button onClick={() => { setPopup("SE2 Rumbia")}} className="se2 lrt-btn">O</button>
                                <button onClick={() => { setPopup("SE3 Bakau")}} className="se3 lrt-btn">O</button>
                                <button onClick={() => { setPopup("SE4 Kangkar")}} className="se4 lrt-btn">O</button>
                                <button onClick={() => { setPopup("SE5 Ranggung")}} className="se5 lrt-btn">O</button>
                    {/*Punggol West LRT Stations*/}
                                <button onClick={() => { setPopup("PW1 Sam Kee")}} className="pw1 lrt-btn">O</button>
                    <button onClick={() => {setPopup('pw2')}} className="pw2 lrt-btn">O</button>
                                <button onClick={() => { setPopup("PW3 Punggol Point")}} className="pw3 lrt-btn">O</button>
                                <button onClick={() => { setPopup("PW4 Samudera")}} className="pw4 lrt-btn">O</button>
                                <button onClick={() => { setPopup("PW5 Nibong")}} className="pw5 lrt-btn">O</button>
                                <button onClick={() => { setPopup("PW6 Sumang")}} className="pw6 lrt-btn">O</button>
                                <button onClick={() => { setPopup("PW7 Soo Teck")}} className="pw7 lrt-btn">O</button>
                    {/*Punggol East LRT Stations*/}
                                <button onClick={() => { setPopup("PE1 Cove")}} className="pe1 lrt-btn">O</button>
                                <button onClick={() => { setPopup("PE2 Meridian")}} className="pe2 lrt-btn">O</button>
                                <button onClick={() => { setPopup("PE3 Coral Edge")}} className="pe3 lrt-btn">O</button>
                                <button onClick={() => { setPopup("PE4 Riviera")}} className="pe4 lrt-btn">O</button>
                                <button onClick={() => { setPopup("PE5 Kadaloor")}} className="pe5 lrt-btn">O</button>
                                <button onClick={() => { setPopup("PE6 Oasis")}} className="pe6 lrt-btn">O</button>
                                <button onClick={() => { setPopup("PE7 Damai")}} className="pe7 lrt-btn">O</button>
                </div>

                            <div className="edges">
                                {/*East West Line Edges*/}
                                <div className="rect ew g1" id="g1"></div>
                                <div className="rect ew g2" id="g2"></div>
                                <div className="rect ew g3" id="g3"></div>
                                <div className="rect ew g4" id="g4"></div>
                                <div className="rect ew g5" id="g5"></div>
                                <div className="rect ew g6" id="g6"></div>
                                <div className="rect ew g7" id="g7"></div>
                                <div className="rect ew g8" id="g8"></div>
                                <div className="rect ew g9" id="g9"></div>
                                <div className="rect ew g10" id="g10"></div>
                                <div className="rect ew g11" id="g11"></div>
                                <div className="rect ew g12" id="g12"></div>
                                <div className="rect ew g13" id="g13"></div>
                                <div className="rect ew g14" id="g14"></div>
                                <div className="rect ew g14_1" id="g14_1"></div>
                                <div className="rect ew g15" id="g15"></div>
                                <div className="rect ew g16" id="g16"></div>
                                <div className="rect ew g17" id="g17"></div>
                                <div className="rect ew g18" id="g18"></div>
                                <div className="rect ew g19" id="g19"></div>
                                <div className="rect ew g20" id="g20"></div>
                                <div className="rect ew g21" id="g21"></div>
                                <div className="rect ew g22" id="g22"></div>
                                <div className="rect ew g23" id="g23"></div>
                                <div className="rect ew g24" id="g24"></div>
                                <div className="rect ew g25" id="g25"></div>
                                <div className="rect ew g26" id="g26"></div>
                                <div className="rect ew g27" id="g27"></div>
                                <div className="rect ew g28" id="g28"></div>
                                <div className="rect ew g29" id="g29"></div>
                                <div className="rect ew g30" id="g30"></div>
                                <div className="rect ew g31" id="g31"></div>
                                <div className="rect ew g32" id="g32"></div>

                                {/*Changi Airport Branch Line Edges*/}
                                <div className="rect ew gc1" id="gc1"></div>
                                <div className="rect ew gc2" id="gc2"></div>
                                <div className="rect ew gc2_1" id="gc2_1"></div>

                                {/*North South Line Edges*/}
                                <div className="rect ns r1" id="r1"></div>
                                <div className="rect ns r2" id="r2"></div>
                                <div className="rect ns r3" id="r3"></div>
                                <div className="rect ns r4" id="r4"></div>
                                <div className="rect ns r5" id="r5"></div>
                                <div className="rect ns r5_1" id="r5_1"></div>
                                <div className="rect ns r6" id="r6"></div>
                                <div className="rect ns r7" id="r7"></div>
                                <div className="rect ns r8" id="r8"></div>
                                <div className="rect ns r9" id="r9"></div>
                                <div className="rect ns r10" id="r10"></div>
                                <div className="rect ns r10_1" id="r10_1"></div>
                                <div className="rect ns r11" id="r11"></div>
                                <div className="rect ns r12" id="r12"></div>
                                <div className="rect ns r12_1" id="r12_1"></div>
                                <div className="rect ns r13" id="r13"></div>
                                <div className="rect ns r14" id="r14"></div>
                                <div className="rect ns r15" id="r15"></div>
                                <div className="rect ns r16" id="r16"></div>
                                <div className="rect ns r17" id="r17"></div>
                                <div className="rect ns r18" id="r18"></div>
                                <div className="rect ns r19" id="r19"></div>
                                <div className="rect ns r20" id="r20"></div>
                                <div className="rect ns r21" id="r21"></div>
                                <div className="rect ns r22" id="r22"></div>
                                <div className="rect ns r23" id="r23"></div>
                                <div className="rect ns r23_1" id="r23_1"></div>
                                <div className="rect ns r24" id="r24"></div>
                                <div className="rect ns r25" id="r25"></div>

                                {/*North East Line Edges*/}
                                <div className="rect ne p1" id="p1"></div>
                                <div className="rect ne p2" id="p2"></div>
                                <div className="rect ne p3" id="p3"></div>
                                <div className="rect ne p4" id="p4"></div>
                                <div className="rect ne p5" id="p5"></div>
                                <div className="rect ne p6" id="p6"></div>
                                <div className="rect ne p7" id="p7"></div>
                                <div className="rect ne p8" id="p8"></div>
                                <div className="rect ne p9" id="p9"></div>
                                <div className="rect ne p10" id="p10"></div>
                                <div className="rect ne p11" id="p11"></div>
                                <div className="rect ne p12" id="p12"></div>
                                <div className="rect ne p13" id="p13"></div>
                                <div className="rect ne p14" id="p14"></div>
                                <div className="rect ne p15" id="p15"></div>

                                {/*Circle Line Edges*/}
                                <div className="rect cc y1" id="y1"></div>
                                <div className="rect cc y2" id="y2"></div>
                                <div className="rect cc y3" id="y3"></div>
                                <div className="rect cc y3_1" id="y3_1"></div>
                                <div className="rect cc y4" id="y4"></div>
                                <div className="rect cc y5" id="y5"></div>
                                <div className="rect cc y6" id="y6"></div>
                                <div className="rect cc y7" id="y7"></div>
                                <div className="rect cc y8" id="y8"></div>
                                <div className="rect cc y9" id="y9"></div>
                                <div className="rect cc y10" id="y10"></div>
                                <div className="rect cc y11" id="y11"></div>
                                <div className="rect cc y12" id="y12"></div>
                                <div className="rect cc y13" id="y13"></div>
                                <div className="rect cc y14" id="y14"></div>
                                <div className="rect cc y15" id="y15"></div>
                                <div className="rect cc y16" id="y16"></div>
                                <div className="rect cc y17" id="y17"></div>
                                <div className="rect cc y17_1" id="y17_1"></div>
                                <div className="rect cc y18" id="y18"></div>
                                <div className="rect cc y19" id="y19"></div>
                                <div className="rect cc y20" id="y20"></div>
                                <div className="rect cc y21" id="y21"></div>
                                <div className="rect cc y22" id="y22"></div>
                                <div className="rect cc y23" id="y23"></div>
                                <div className="rect cc y24" id="y24"></div>
                                <div className="rect cc y25" id="y25"></div>
                                <div className="rect cc y26" id="y26"></div>
                                <div className="rect cc y27" id="y27"></div>

                                {/*Circle Line Extension Edges*/}
                                <div className="rect ce ye1" id="ye1"></div>
                                <div className="rect ce ye2" id="ye2"></div>
                                <div className="rect ce ye2_1" id="ye2_1"></div>

                                {/*Downtown Line Edges*/}
                                <div className="rect dt b1" id="b1"></div>
                                <div className="rect dt b2" id="b2"></div>
                                <div className="rect dt b3" id="b3"></div>
                                <div className="rect dt b4" id="b4"></div>
                                <div className="rect dt b5" id="b5"></div>
                                <div className="rect dt b6" id="b6"></div>
                                <div className="rect dt b7" id="b7"></div>
                                <div className="rect dt b8" id="b8"></div>
                                <div className="rect dt b9" id="b9"></div>
                                <div className="rect dt b10" id="b10"></div>
                                <div className="rect dt b11" id="b11"></div>
                                <div className="rect dt b12" id="b12"></div>
                                <div className="rect dt b13" id="b13"></div>
                                <div className="rect dt b13_1" id="b13_1"></div>
                                <div className="rect dt b14" id="b14"></div>
                                <div className="rect dt b14_1" id="b14_1"></div>
                                <div className="rect dt b15" id="b15"></div>
                                <div className="rect dt b16" id="b16"></div>
                                <div className="rect dt b17" id="b17"></div>
                                <div className="rect dt b18" id="b18"></div>
                                <div className="rect dt b18_1" id="b18_1"></div>
                                <div className="rect dt b18_2" id="b18_2"></div>
                                <div className="rect dt b19" id="b19"></div>
                                <div className="rect dt b20" id="b20"></div>
                                <div className="rect dt b21" id="b21"></div>
                                <div className="rect dt b22" id="b22"></div>
                                <div className="rect dt b23" id="b23"></div>
                                <div className="rect dt b24" id="b24"></div>
                                <div className="rect dt b25" id="b25"></div>
                                <div className="rect dt b26" id="b26"></div>
                                <div className="rect dt b27" id="b27"></div>
                                <div className="rect dt b28" id="b28"></div>
                                <div className="rect dt b29" id="b29"></div>
                                <div className="rect dt b30" id="b30"></div>
                                <div className="rect dt b30_1" id="b30_1"></div>
                                <div className="rect dt b31" id="b31"></div>
                                <div className="rect dt b32" id="b32"></div>

                                {/*Thomson-East Coast Line Edges*/}
                                <div className="rect te br1" id="br1"></div>
                                <div className="rect te br2" id="br2"></div>

                                {/*Bukit Panjang LRT Edges*/}
                                <div className="rect bp bp_e1" id="bp_e1"></div>
                                <div className="rect bp bp_e2" id="bp_e2"></div>
                                <div className="rect bp bp_e3" id="bp_e3"></div>
                                <div className="rect bp bp_e4" id="bp_e4"></div>
                                <div className="rect bp bp_e5" id="bp_e5"></div>
                                <div className="rect bp bp_e6" id="bp_e6"></div>
                                <div className="rect bp bp_e6_1" id="bp_e6_1"></div>
                                <div className="rect bp bp_e7" id="bp_e7"></div>
                                <div className="rect bp bp_e8" id="bp_e8"></div>
                                <div className="rect bp bp_e9" id="bp_e9"></div>
                                <div className="rect bp bp_e10" id="bp_e10"></div>
                                <div className="rect bp bp_e11" id="bp_e11"></div>
                                <div className="rect bp bp_e12" id="bp_e12"></div>
                                <div className="rect bp bp_e13" id="bp_e13"></div>
                                <div className="rect bp bp_e13_1" id="bp_e13_1"></div>

                                {/*Sengkang West LRT Edges*/}
                                <div className="rect skw skw_e1" id="skw_e1"></div>
                                <div className="rect skw skw_e2" id="skw_e2"></div>
                                <div className="rect skw skw_e3" id="skw_e3"></div>
                                <div className="rect skw skw_e4" id="skw_e4"></div>
                                <div className="rect skw skw_e5" id="skw_e5"></div>
                                <div className="rect skw skw_e6" id="skw_e6"></div>
                                <div className="rect skw skw_e7" id="skw_e7"></div>
                                <div className="rect skw skw_e8" id="skw_e8"></div>
                                <div className="rect skw skw_e9" id="skw_e9"></div>

                                {/*Sengkang East LRT Edges*/}
                                <div className="rect ske ske_e1" id="ske_e1"></div>
                                <div className="rect ske ske_e2" id="ske_e2"></div>
                                <div className="rect ske ske_e3" id="ske_e3"></div>
                                <div className="rect ske ske_e3_1" id="ske_e3_1"></div>
                                <div className="rect ske ske_e4" id="ske_e4"></div>
                                <div className="rect ske ske_e4_1" id="ske_e4_1"></div>
                                <div className="rect ske ske_e5" id="ske_e5"></div>
                                <div className="rect ske ske_e6" id="ske_e6"></div>

                                {/*Punggol West LRT Edges*/}
                                <div className="rect pgw pgw_e1" id="pgw_e1"></div>
                                <div className="rect pgw pgw_e2" id="pgw_e2"></div>
                                <div className="rect pgw pgw_e3" id="pgw_e3"></div>
                                <div className="rect pgw pgw_e3_1" id="pgw_e3_1"></div>
                                <div className="rect pgw pgw_e4" id="pgw_e4"></div>
                                <div className="rect pgw pgw_e5" id="pgw_e5"></div>
                                <div className="rect pgw pgw_e6" id="pgw_e6"></div>
                                <div className="rect pgw pgw_e7" id="pgw_e7"></div>
                                <div className="rect pgw pgw_e8" id="pgw_e8"></div>

                                {/*Punggol East LRT Edges-*/}
                                <div className="rect pge pge_e1" id="pge_e1"></div>
                                <div className="rect pge pge_e2" id="pge_e2"></div>
                                <div className="rect pge pge_e3" id="pge_e3"></div>
                                <div className="rect pge pge_e4" id="pge_e4"></div>
                                <div className="rect pge pge_e4_1" id="pge_e4_1"></div>
                                <div className="rect pge pge_e5" id="pge_e5"></div>
                                <div className="rect pge pge_e6" id="pge_e6"></div>
                                <div className="rect pge pge_e7" id="pge_e7"></div>
                                <div className="rect pge pge_e8" id="pge_e8"></div>
                            </div>

                </div>
                </TransformComponent>
            </TransformWrapper>

        </div>
            
            <div className="modal" style={(!(popup == "")) ? { display: 'block' } : { display: 'none' }}>
                <div className="modal-content">
                    <div className="container">
                        <span onClick={()=>{setPopup("")}} className="button display-topright">&times;</span>
                        <h3>You have selected {popup}</h3>
                        <div style={{ display: "flex", justifyContent:"space-evenly"}}>
                        <button className="selectStn" onClick={()=> {setStart(popup); setPopup("")}}>Start Station</button>
                        <button className="selectStn" onClick={()=> {setEnd(popup); setPopup("")}}>End Station</button>
                        <button className="selectStn" onClick={() =>{setActiveStation(popup); setPopup("") }}>Show Info</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </form>
        );

}


export default MapContainer;