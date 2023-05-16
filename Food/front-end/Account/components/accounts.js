import { useEffect,useState } from "react";
import AccountPage from "../pages/account";

const AccountComponent = ({route,navigation}) => {

    const state = route.params;

    const [email,setEmail] = useState(state.state.email);
    const [check,setCheck] = useState(false);
    const [myData,setData] = useState([]);
    const [food,setFoods] = useState([]);

    
    const checkAccountType =async () => {
        try
        {
            const frispyAccountCheck = await fetch("http://192.168.224.2:5000/checkAccountType",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email
                })
            })

            frispyAccountCheck.status === 200 ? setCheck(true) : null;
            frispyAccountCheck.status === 201 ? setCheck(false) : null;
        }
        catch(err)
        {
            console.log(err);
        }
    }

    const selectAccount =async (account) => {
        try
        {
            const accountCreatedFrispy = await fetch("http://192.168.224.2:5000/selectAccount",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,account
                })
            });

            accountCreatedFrispy.status === 200 ? setCheck(true) : null;
        }
        catch(err)
        {
            console.log(err);
        }
    }

    const getAccountDetails =async () => {
        let gathered = await fetch("http://192.168.224.2:5000/accountDetails/"+email,{
            method:"GET",
            headers:{
                'Accept':"application/json",
                'content-type':"application/json"
            }
        });

        const newGathered = await gathered.json();
        setData(newGathered);
    }

    const openSetting = () => {
        navigation.navigate("Setting", {
            state:{
                email:myData.email,
                firstNav:"Add Food",
                firstNavLink:"AddFood",
                secondNav:"Updated Exisiting Food",
                secondNavLink:"updateFood",
                thirdNav:"Delete Food",
                thirdNavLink:"deleteFood",
                fourthNav:"Exit",
                fourthNavLink:"Account"
            }
        })
    }

    const getFoods = async () => {
        try
        {
            let getFoodItems = await fetch("http://192.168.224.2:5000/getUserItems/"+email,{
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

    useEffect(()=>{
        checkAccountType();
        getAccountDetails();
        getFoods();
    },[])

    return(
        <AccountPage 
            check={check} 
            selectAccount={selectAccount}
            myData={myData}
            openSetting={openSetting}
            food={food}
        />
    )
}

export default AccountComponent;