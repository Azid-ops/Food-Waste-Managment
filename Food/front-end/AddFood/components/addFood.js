//Importing Packages
import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';

//Importing Files
import AddFoodPage from '../pages/addFood';

const AddFood = ({navigation,route}) => {

    const state = route.params;
    
    const [email,setEmail] = useState(state.state.email);
    const [foodName,setFoodName] = useState("");
    const [foodImageLink,setFoodImageLink] = useState("");
    const [foodQuantity,setFoodQuantity] = useState("");

    //Error States
    const [wrongCredientials,setWrongCredientials] = useState("");

    const triggerLogin =async (props) => {
        try
        {
            const foodFrispy = await fetch("http://192.168.224.2:5000/addFood", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,foodName,foodImageLink,foodQuantity
                })
            })

            foodFrispy.status === 200 ? (
                navigation.navigate("Account", {
                    state:{
                        email:state.state.email
                    }
                }),
                setWrongCredientials("")
            ) : null;

            // loginFrispy.status === 401 ? setWrongCredientials("Credientials are not Correct") : null;
            // loginFrispy.status === 400 ? setWrongCredientials("User does not Exist") : null;
        }
        catch(err)
        {
            console.log(err);
        }
    }

    return(
        <AddFoodPage 
            setEmail={setEmail} 
            triggerLogin={triggerLogin}
            wrongCredientials={wrongCredientials}
            navigation={navigation}
            setFoodName={setFoodName}
            setFoodImageLink={setFoodImageLink}
            setFoodQuantity={setFoodQuantity}
        />
    )
}

export default AddFood;