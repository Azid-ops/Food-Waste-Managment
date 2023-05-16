import React, {useState} from "react";
import CreateEventPage from "../pages/createEvent";

const CreateEvent = ({route,navigation}) => {

    const email = route.params;
    
    const [myEmail,setEmail] = useState(email.state.email);
    const [eventName,setEventName] = useState("");
    const [eventFood,setEventFood] = useState("");
    const [eventQuantity,setEventQuantity] = useState("");
    const [eventImage,setEventImage] = useState("");


    const postEvent =async () => {
        try{
            await fetch("http://192.168.224.2:5000/postEvent", {
                method:"POST",
                headers:{
                    "CONTENT-TYPE":"application/json"
                },
                body:JSON.stringify({
                    myEmail,eventName,eventFood,eventQuantity,eventImage
                })
            })
        }
        catch(err)
        {
            console.log(err);
        }
        
    }

    return(
        <CreateEventPage 
            setEventName={setEventName}
            setEventFood={setEventFood}
            setEventQuantity={setEventQuantity}
            setEventImage={setEventImage}
            postEvent={postEvent}
        />
    )
}

export default CreateEvent;