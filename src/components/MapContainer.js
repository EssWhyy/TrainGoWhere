import React from 'react';
import mapCoordinates from './mapCoordinates.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function MapContainer({ selectedStart, selectedEnd, setActiveStation}){

    const setInfo = (stationCode) =>{
        console.log(stationCode); 
        setActiveStation(stationCode);
        
    }

    
    return(
        <div className="mapContainer" style={{ height: '60vw', width: '70%', backgroundColor: '#572759' }}>
            <h3>Start Station: {" "} {selectedStart || "<placeholder>"} End Station: {" "} {selectedEnd || "<placeholder>"}</h3>
            <h4>Route Info Goes Here.</h4>
            <TransformWrapper>
            <TransformComponent>
                <div className="map" style={{ mapCoordinates }.default}>
                <img className="tmp" src="https://i.imgur.com/w7ReB4N.png" alt="Station map not loaded. Please refresh page" style = {{height: "50vw", width: "70vw"}}/>
                <div className="nodes">
                    {/*East West Line & Changi Airport Branch Line Stations*/}
                    <button onClick={() => {setInfo('cg1')}} className="cg1 ic-btn">O</button>
                    <button onClick={() => {setInfo('cg2')}} className="cg2 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew1')}} className="ew1 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew2')}} className="ew2 ic-btn">O</button>
                    <button onClick={() => {setInfo('ew3')}} className="ew3 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew4')}} className="ew4 ic-btn">O</button>
                    <button onClick={() => {setInfo('ew5')}} className="ew5 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew6')}} className="ew6 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew7')}} className="ew7 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew8')}} className="ew8 ic-btn">O</button>
                    <button onClick={() => {setInfo('ew9')}} className="ew9 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew10')}} className="ew10 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew11')}} className="ew11 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew12')}} className="ew12 ic-btn">O</button>
                    <button onClick={() => {setInfo('ew13')}} className="ew13 ic-btn">O</button>
                    <button onClick={() => {setInfo('ew14')}} className="ew14 ic-btn">O</button>
                    <button onClick={() => {setInfo('ew15')}} className="ew15 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew16')}} className="ew16 ic-btn">O</button>
                    <button onClick={() => {setInfo('ew17')}} className="ew17 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew18')}} className="ew18 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew19')}} className="ew19 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew20')}} className="ew20 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew21')}} className="ew21 ic-btn">O</button>
                    <button onClick={() => {setInfo('ew22')}} className="ew22 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew23')}} className="ew23 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew24')}} className="ew24 ic-btn">O</button>
                    <button onClick={() => {setInfo('ew25')}} className="ew25 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew26')}} className="ew26 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew27')}} className="ew27 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew28')}} className="ew28 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew29')}} className="ew29 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew30')}} className="ew30 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew31')}} className="ew31 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew32')}} className="ew32 ew-btn">O</button>
                    <button onClick={() => {setInfo('ew33')}} className="ew33 ew-btn">O</button>
                    {/*North-South Line Stations*/}
                    <button onClick={() => {setInfo('ns2')}} className="ns2 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns3')}} className="ns3 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns4')}} className="ns4 ic-btn">O</button>
                    <button onClick={() => {setInfo('ns5')}} className="ns5 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns7')}} className="ns7 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns8')}} className="ns8 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns9')}} className="ns9 ic-btn">O</button>
                    <button onClick={() => {setInfo('ns10')}} className="ns10 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns11')}} className="ns11 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns12')}} className="ns12 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns13')}} className="ns13 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns14')}} className="ns14 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns15')}} className="ns15 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns16')}} className="ns16 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns17')}} className="ns17 ic-btn">O</button>
                    <button onClick={() => {setInfo('ns18')}} className="ns18 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns19')}} className="ns19 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns20')}} className="ns20 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns21')}} className="ns21 ic-btn">O</button>
                    <button onClick={() => {setInfo('ns22')}} className="ns22 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns23')}} className="ns23 ns-btn">O</button>
                    <button onClick={() => {setInfo('ns24')}} className="ns24 ic-btn">O</button>
                    <button onClick={() => {setInfo('ns25')}} className="ns25 ic-btn">O</button>
                    <button onClick={() => {setInfo('ns27')}} className="ns27 ic-btn">O</button>
                    <button onClick={() => {setInfo('ns28')}} className="ns28 ns-btn">O</button>
                    {/*North-East Line Stations*/}
                    <button onClick={() => {setInfo('ne1')}} className="ne1 ic-btn">O</button>
                    <button onClick={() => {setInfo('ne4')}} className="ne4 ic-btn">O</button>
                    <button onClick={() => {setInfo('ne5')}} className="ne5 ne-btn">O</button>
                    <button onClick={() => {setInfo('ne7')}} className="ne7 ic-btn">O</button>
                    <button onClick={() => {setInfo('ne8')}} className="ne8 ne-btn">O</button>
                    <button onClick={() => {setInfo('ne9')}} className="ne9 ne-btn">O</button>
                    <button onClick={() => {setInfo('ne10')}} className="ne10 ne-btn">O</button>
                    <button onClick={() => {setInfo('ne11')}} className="ne11 ne-btn">O</button>
                    <button onClick={() => {setInfo('ne12')}} className="ne12 ic-btn">O</button>
                    <button onClick={() => {setInfo('ne13')}} className="ne13 ne-btn">O</button>
                    <button onClick={() => {setInfo('ne14')}} className="ne14 ne-btn">O</button>
                    <button onClick={() => {setInfo('ne15')}} className="ne15 ne-btn">O</button>
                    <button onClick={() => {setInfo('ne16')}} className="ne16 ic-btn">O</button>
                    <button onClick={() => {setInfo('ne17')}} className="ne17 ic-btn">O</button>
                    {/*Circle Line Stations*/}
                    <button onClick={() => {setInfo('cc2')}} className="cc2 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc3')}} className="cc3 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc4')}} className="cc4 ic-btn">O</button>
                    <button onClick={() => {setInfo('cc5')}} className="cc5 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc6')}} className="cc6 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc7')}} className="cc7 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc8')}} className="cc8 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc10')}} className="cc10 ic-btn">O</button>
                    <button onClick={() => {setInfo('cc11')}} className="cc11 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc12')}} className="cc12 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc14')}} className="cc14 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc16')}} className="cc16 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc17')}} className="cc17 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc19')}} className="cc19 ic-btn">O</button>
                    <button onClick={() => {setInfo('cc20')}} className="cc20 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc21')}} className="cc21 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc23')}} className="cc23 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc24')}} className="cc24 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc25')}} className="cc25 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc26')}} className="cc26 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc27')}} className="cc27 cc-btn">O</button>
                    <button onClick={() => {setInfo('cc28')}} className="cc28 cc-btn">O</button>
                    <button onClick={() => {setInfo('ce1')}} className="ce1 ic-btn">O</button>
                    {/*Downtown Line*/}
                    <button onClick={() => {setInfo('dt1')}} className="dt1 ic-btn">O</button>
                    <button onClick={() => {setInfo('dt2')}} className="dt2 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt3')}} className="dt3 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt5')}} className="dt5 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt6')}} className="dt6 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt7')}} className="dt7 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt8')}} className="dt8 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt10')}} className="dt10 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt13')}} className="dt13 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt17')}} className="dt17 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt18')}} className="dt18 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt20')}} className="dt20 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt21')}} className="dt21 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt22')}} className="dt22 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt23')}} className="dt23 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt24')}} className="dt24 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt25')}} className="dt25 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt27')}} className="dt27 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt28')}} className="dt28 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt29')}} className="dt29 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt30')}} className="dt30 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt31')}} className="dt31 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt33')}} className="dt33 dt-btn">O</button>
                    <button onClick={() => {setInfo('dt34')}} className="dt34 dt-btn">O</button>
                    {/*Thomson-East Coast Line Stations*/}
                    <button onClick={() => {setInfo('te1')}} className="te1 te-btn">O</button>
                    <button onClick={() => {setInfo('te3')}} className="te3 te-btn">O</button>
                    {/*Bukit Panjang LRT Stations*/}
                    <button onClick={() => {setInfo('bp2')}} className="bp2 lrt-btn">O</button>
                    <button onClick={() => {setInfo('bp3')}} className="bp3 lrt-btn">O</button>
                    <button onClick={() => {setInfo('bp4')}} className="bp4 lrt-btn">O</button>
                    <button onClick={() => {setInfo('bp5')}} className="bp5 lrt-btn">O</button>
                    <button onClick={() => {setInfo('bp7')}} className="bp7 lrt-btn">O</button>
                    <button onClick={() => {setInfo('bp8')}} className="bp8 lrt-btn">O</button>
                    <button onClick={() => {setInfo('bp9')}} className="bp9 lrt-btn">O</button>
                    <button onClick={() => {setInfo('bp10')}} className="bp10 lrt-btn">O</button>
                    <button onClick={() => {setInfo('bp11')}} className="bp11 lrt-btn">O</button>
                    <button onClick={() => {setInfo('bp12')}} className="bp12 lrt-btn">O</button>
                    <button onClick={() => {setInfo('bp13')}} className="bp13 lrt-btn">O</button>
                    {/*Sengkang West LRT Stations*/}
                    <button onClick={() => {setInfo('sw1')}} className="sw1 lrt-btn">O</button>
                    <button onClick={() => {setInfo('sw2')}} className="sw2 lrt-btn">O</button>
                    <button onClick={() => {setInfo('sw3')}} className="sw3 lrt-btn">O</button>
                    <button onClick={() => {setInfo('sw4')}} className="sw4 lrt-btn">O</button>
                    <button onClick={() => {setInfo('sw5')}} className="sw5 lrt-btn">O</button>
                    <button onClick={() => {setInfo('sw6')}} className="sw6 lrt-btn">O</button>
                    <button onClick={() => {setInfo('sw7')}} className="sw7 lrt-btn">O</button>
                    <button onClick={() => {setInfo('sw8')}} className="sw8 lrt-btn">O</button>
                    {/*Sengkang East LRT Stations*/}
                    <button onClick={() => {setInfo('se1')}} className="se1 lrt-btn">O</button>
                    <button onClick={() => {setInfo('se2')}} className="se2 lrt-btn">O</button>
                    <button onClick={() => {setInfo('se3')}} className="se3 lrt-btn">O</button>
                    <button onClick={() => {setInfo('se4')}} className="se4 lrt-btn">O</button>
                    <button onClick={() => {setInfo('se5')}} className="se5 lrt-btn">O</button>
                    {/*Punggol West LRT Stations*/}
                    <button onClick={() => {setInfo('pw1')}} className="pw1 lrt-btn">O</button>
                    <button onClick={() => {setInfo('pw2')}} className="pw2 lrt-btn">O</button>
                    <button onClick={() => {setInfo('pw3')}} className="pw3 lrt-btn">O</button>
                    <button onClick={() => {setInfo('pw4')}} className="pw4 lrt-btn">O</button>
                    <button onClick={() => {setInfo('pw5')}} className="pw5 lrt-btn">O</button>
                    <button onClick={() => {setInfo('pw6')}} className="pw6 lrt-btn">O</button>
                    <button onClick={() => {setInfo('pw7')}} className="pw7 lrt-btn">O</button>
                    {/*Punggol East LRT Stations*/}
                    <button onClick={() => {setInfo('pe1')}} className="pe1 lrt-btn">O</button>
                    <button onClick={() => {setInfo('pe2')}} className="pe2 lrt-btn">O</button>
                    <button onClick={() => {setInfo('pe3')}} className="pe3 lrt-btn">O</button>
                    <button onClick={() => {setInfo('pe4')}} className="pe4 lrt-btn">O</button>
                    <button onClick={() => {setInfo('pe5')}} className="pe5 lrt-btn">O</button>
                    <button onClick={() => {setInfo('pe6')}} className="pe6 lrt-btn">O</button>
                    <button onClick={() => {setInfo('pe7')}} className="pe7 lrt-btn">O</button>
                </div>
                </div>
                </TransformComponent>
            </TransformWrapper>
            </div>

        );

}


export default MapContainer;