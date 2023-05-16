//Importing Packages
import { useState } from 'react';

//Importing Pages
import ForgotPasswordPage from '../pages/forgotPassword';

const ForgotPasswordComponent = ({props,navigation}) => {

    const [email,setEmail] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");

    //Error States
    const [error,setError] = useState("");

    const headToLogin = () => {
        navigation.navigate("Login")
    }

    const recoverPassword =async () => {
        try{
            const recoveryFrispy = await fetch("http://192.168.224.2:5000/recoverPassword", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,phoneNumber
                })
            })

            recoveryFrispy.status >= 400 ? (
                setError("Wrong Credientials") 
            ) : (
                setError("Your Password has been Reset to 123"),
                setTimeout(()=>{
                    headToLogin()
                },2000)
            )
        }
        catch(err)
        {
            console.log(err);
        }
    }

    return(
        <ForgotPasswordPage 
            setEmail={setEmail} 
            setPhoneNumber={setPhoneNumber} 
            recoverPassword={recoverPassword}
            error={error}
        />
    )
}

export default ForgotPasswordComponent;