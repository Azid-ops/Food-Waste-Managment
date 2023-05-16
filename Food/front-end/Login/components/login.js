//Importing Packages
import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';

//Importing Files
import LoginPage from '../pages/login';

const LoginComponent = ({navigation}) => {

    const [email,setEmail] = useState("");;
    const [food,setFood] = useState("")
    const [password,setPassword] = useState("");

    //Error States
    const [wrongCredientials,setWrongCredientials] = useState("");

    const triggerLogin =async (props) => {
        try
        {
            const loginFrispy = await fetch("http://192.168.224.2:5000/login", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,password
                })
            })

            loginFrispy.status === 200 ? (
                navigation.navigate("Dashboard", {
                    state:{
                        email:email
                    }
                }),
                setWrongCredientials("")
            ) : null;

            loginFrispy.status === 401 ? setWrongCredientials("Credientials are not Correct") : null;
            loginFrispy.status === 400 ? setWrongCredientials("User does not Exist") : null;
        }
        catch(err)
        {
            console.log(err);
        }
    }

    return(
        <LoginPage 
            setEmail={setEmail} 
            setPassword={setPassword}
            triggerLogin={triggerLogin}
            wrongCredientials={wrongCredientials}
            navigation={navigation}
        />
    )
}

export default LoginComponent;