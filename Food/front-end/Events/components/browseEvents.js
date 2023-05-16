import React, { useEffect, useState } from "react";

import MyEventPage from "../pages/browseEvents";

const BrowseEvents = ({route,navigation}) => {

    const email = route.params;

    const [myEvents,setMyEvents] = useState([]);
    
    const getMyEvents = async () => {
        try{
            const frispy = await fetch("http://192.168.224.2:5000/getEvents",{
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
            });

            const finalData = await frispy.json();
            setMyEvents(finalData);
            console.log(myEvents);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    useEffect(()=>{
        getMyEvents();
    },[]);

    return(
        <MyEventPage myEvents={myEvents}/>
    )
}

export default BrowseEvents;