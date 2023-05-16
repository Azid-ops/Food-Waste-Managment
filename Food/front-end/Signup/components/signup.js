//Importing Packages
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';

//Importing Files
import SignupPage from '../pages/signup';

const SignupComponent = (props) => {

    //Input Form States
    const [fName,setFName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [reType,setReType] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");

    //Error States
    // 1. User Already Exist State
    const [userExist,setUserExist] = useState("");

    // 2. User is all ok State
    const [allOk,setAllOk] = useState("");

    // 3 .Not A Valid Email State
    const [validEmail,setValidEmail] = useState("");

    // 4. Password Length is short
    const [shortPassword,setShortPassword] = useState("");

    // 5. Password Not Identical
    const [identicalPassword,setIdenticalPassword] = useState("");
 
    const signedUp = async () => {
        try
        {
            const frispy = await fetch("http://192.168.224.2:5000/signup", {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    fName,email,password,reType,phoneNumber
                })
            });

            frispy.status === 400 ? setUserExist("User Already Exist.") : null;
            frispy.status === 200 ? (
                setUserExist(""),
                setValidEmail(""),
                setShortPassword(""),
                setIdenticalPassword(""),
                setIdenticalPassword(""),
                props.navigation.navigate("Verification", {
                    state:{
                        email:email,
                        phoneNumber:phoneNumber
                    }
                })
            ): null;

            frispy.status === 401 ? (
                setValidEmail("Enter a Valid Email"),
                setUserExist(""),
                setShortPassword(""),
                setIdenticalPassword("")
            ): null;

            frispy.status === 402 ? (
                setShortPassword("Too Short Password"),
                setUserExist(""),
                setValidEmail(""),
                setIdenticalPassword("")
            ) : null;

            frispy.status === 403 ? (
                setShortPassword(""),
                setUserExist(""),
                setValidEmail(""),
                setIdenticalPassword("Password Doesnot Match")
            ) : null;
        }
        catch(err)
        {
            console.log(err);
        }   
    }
    
    return(
        <SignupPage 
            setFName={setFName}
            setEmail={setEmail}
            setPassword={setPassword}
            setReType={setReType}
            setPhoneNumber={setPhoneNumber}
            signedUp={signedUp} 
            userExist={userExist}
            shortPassword={shortPassword}
            validEmail={validEmail}
            identicalPassword={identicalPassword}
            navigation={props.navigation}
        />
    )
}

export default SignupComponent;