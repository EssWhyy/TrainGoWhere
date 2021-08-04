import React from 'react';

function Header(){

    {/*This selects the stations for route and fare calculation which in turn highlights the route on the */}
    return (

        <div className="Header" style={{
            
            display: "flex", flexFlow: "row nowrap",
            justifyContent: 'space-around', backgroundColor: '#325894', boxShadow: '5px 10px', alignItems: "center"
        }}>

            <h1>TrainGoWhere</h1>

            <h3> <a href="https://docs.google.com/document/d/1ZbRiz7WiUFm1o1rNtL0BeYwt6QlUOEtZ_ZvNQ_-wbfE/edit?ts=60d7ef48#">About/Credits</a></h3>
            <h3> <a href="https://forms.gle/WZMbQ8BLGrds2jaCA">Feedback</a></h3>
        </div>
);

}



export default Header;