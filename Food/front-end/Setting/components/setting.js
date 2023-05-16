import SettingPage from "../pages/setting";

const SettingComponent = ({route,navigation}) => {

    const state = route.params;

    const Exit = () => {
        navigation.navigate(state.state.fourthNavLink, {
            state:{
                email:state.state.email
            }
        })
    }

    const Account = () => {
        navigation.navigate(state.state.firstNavLink, {
            state:{
                email:state.state.email
            }
        })
    }

    return(
        <SettingPage Exit={Exit} Account={Account} state={state}/>
    )
}

export default SettingComponent;