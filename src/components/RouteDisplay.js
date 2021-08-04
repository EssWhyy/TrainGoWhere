import React from 'react';
import {useState, useEffect} from 'react';



function RouteDisplay(){

    const [statusColour, changeStatusColour] = useState("#1fdb51");
    const [update, postUpdates] = useState("All Train Services Operational");
    
    //Check train service timing
    const checkTime = () => {
        var lateTime = '23:30:00';
        var endTime = '00:30:00';
        var startTime = '05:30:00';

        var currentDate = new Date();

        var startDate = new Date(currentDate.getTime());
        startDate.setHours(startTime.split(":")[0]);
        startDate.setMinutes(startTime.split(":")[1]);
        startDate.setSeconds(startTime.split(":")[2]);

        var endDate = new Date(currentDate.getTime());
        endDate.setHours(endTime.split(":")[0]);
        endDate.setMinutes(endTime.split(":")[1]);
        endDate.setSeconds(endTime.split(":")[2]);

        var lateDate = new Date(currentDate.getTime());
        lateDate.setHours(lateTime.split(":")[0]);
        lateDate.setMinutes(lateTime.split(":")[1]);
        lateDate.setSeconds(lateTime.split(":")[2]);
        
        console.log(currentDate);
        console.log(startDate);
        console.log(endDate)
        console.log(lateDate)
        
        if (lateTime < currentDate || endDate > currentDate){
            return "ending"
        } else if(endDate < currentDate && startDate > currentDate){
            return "ended"
        } else{
            return "operational"
        }

    }
    useEffect(() => {
        fetch('https://testapi8888.herokuapp.com/api/lta')
            .then(res => res.json())
            .then(data => {
                //if train faults, highlight them on status bar.
                if (data.status == 2 || data.status == "2"){
                    changeStatusColour("#f5260f");
                    var latestUpdate = data.Message[0].Content;
                    postUpdates(latestUpdate);
                } else{
                    //check train avail timings.
                    if (checkTime()=="ended"){
                        changeStatusColour("#f5260f");
                        //if train services have ceased.
                        postUpdates("Train Services have ended. Services to resume around 0530 hrs")
                    } else if (checkTime() == "ending"){
                        changeStatusColour("#f5b92c");
                        //remind people that Train Services usually end around after 1130hrs to 1230hrs
                        postUpdates("Train Services end around 0000-0030 hrs");
                    } else {
                        changeStatusColour("#1fdb51");
                        postUpdates("All Train Services are Operational");
                    }
                }
                
            });
    }, []);



    return (
        <ul className="RouteDisplay" style={{ backgroundColor: statusColour, 
        paddingTop: '2%', alignItems: "center"}}>
            {update}
        </ul>);
}

export default RouteDisplay;