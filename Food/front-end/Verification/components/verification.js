//Importing Packages
import { useEffect,useState } from 'react';

//Importing Files
import VerificationPages from '../pages/verification';

const VerificationComponent = ({route,navigation}) => {

    const {state} = route.params;

    const [verifiedNumber,setVerifiedNumber] = useState(state.phoneNumber);
    const [verifiedEmail,setVerifiedEmail] = useState(state.email);
    const [otp,setOtp] = useState("");
    const [sentOtpResult,setSentOtpResult] = useState("");
    
    const sendSMS = async () => {
        setVerifiedNumber(state.phoneNumber)
        try{
            await fetch('http://192.168.224.2:5000/sendSMS', {
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    verifiedNumber,verifiedEmail
                })
            })
        }
        catch(err)
        {
            console.log(err);
        }
    }
    useEffect(() =>{
        sendSMS();
    },[])

    const confirmOTP =async () => {
        try{
            const recievedOTP = await fetch('http://192.168.224.2:5000/verifyOTP', {
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    verifiedNumber,verifiedEmail,otp
                })
            })

            if(recievedOTP.status === 200)
            {
                setSentOtpResult("")
                
            }
            else
            {
                setSentOtpResult("Wrong OTP");
            }
        }
        catch(err)
        {
            console.log(err);
        }
    }

    return(
        <VerificationPages 
            confirmOTP={confirmOTP} 
            setOtp={setOtp}
            sentOtpResult={sentOtpResult}
        />
    )
}

export default VerificationComponent;