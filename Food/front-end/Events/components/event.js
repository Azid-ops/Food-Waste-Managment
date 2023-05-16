import React from "react";
import EventPage from "../pages/event";

const Event = ({route,navigation}) => {

    const email = route.params;

    const createEvent = () => {
        navigation.navigate("Create",{
            state:{
                email:email.state.email
            }
        })
    }

    const myEvents = () => {
        navigation.navigate("MyEvents",{
            state:{
                email:email.state.email
            }
        })
    }

    const browseEvents = () => {
        navigation.navigate("Browse",{
            state:{
                email:email.state.email
            }
        })
    }

    return(
        <EventPage 
            createEvent={createEvent} 
            myEvents={myEvents}
            browseEvents={browseEvents}
        />
    )
}

export default Event;