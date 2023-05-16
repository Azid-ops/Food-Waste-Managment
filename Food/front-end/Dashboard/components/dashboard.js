//Importing Pages
import { useEffect, useState } from 'react';
import DashboardPage from '../pages/dashboard';

const DashboardComponent = ({route,navigation}) => {
    const state = route.params;

    const [food,setFoods] = useState([]);

    const getFoods = async () => {
        try
        {
            let getFoodItems = await fetch("http://192.168.224.2:5000/getFoodItems/"+state.state.email,{
                method:"GET",
                headers:{
                    'Accept':"application/json",
                    'content-type':"application/json"
                }
            });

            const newFood = await getFoodItems.json();
            setFoods(newFood);
        }
        catch(err)
        {
            consolelog(err);
        }
        
    }
    
    const openSetting = () => {
        navigation.navigate("Setting", {
            state:{
                email:state.state.email,
                firstNav:"Account",
                firstNavLink:"Account",
                secondNav:"Resturant Food",
                secondNavLink:"restoFood",
                thirdNav:"NGO's Food",
                thirdNavLink:"ngoFood",
                fourthNav:"Exit",
                fourthNavLink:"Dashboard"
            }
        })
    }

    useEffect(()=>{
        getFoods();
    },[]);

    const EventSetting = () => {
        navigation.navigate("Events", {
            state:{
                email:state.state.email
            }
        })
    }

    return(
        <DashboardPage 
            email={state.state.email} 
            openSetting={openSetting}
            food={food}
            EventSetting={EventSetting}
        />
    )
}
export default DashboardComponent;