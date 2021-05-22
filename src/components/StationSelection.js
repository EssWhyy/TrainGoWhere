import React from 'react';

function StationSelection(){


    return (

        <div className="Header" style={{
            
            display: "flex", flexFlow: "row nowrap",
            justifyContent: 'space-around', backgroundColor: '#325894', boxShadow: '5px 10px'
        }}>
            {/* Header contains dropdown selection and route information*/}
            <h1>TrainGoWhere</h1>

            <div className="Selections" style={{ display: "flex", flexFlow: "row nowrap", justifyContent: 'space-evenly', paddingTop: "2.5%" }}>

                <div>
                    <label htmlFor="startStationSelect"><strong>From Here:</strong></label>

                    <select name="startStationSelect" id="startStationSelect">

                        <option value="Jurong East">Jurong East</option>
                        <option value="Eunos">Eunos</option>
                        <option value="Dhoby Ghaut">Dhoby Ghaut</option>
                        <option value="Ang Mo Kio">Ang Mo Kio</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="endStationSelect"><strong>Go There:</strong></label>

                    <select name="endStationSelect" id="endStationSelect">

                        <option value="Punggol">Punggol</option>
                        <option value="Boon Lay">Boon Lay</option>
                        <option value="Newton">Newton</option>
                        <option value="Changi Airport">Changi Airport</option>
                    </select>
                </div>
            </div>

        </div>
);

}



export default StationSelection;