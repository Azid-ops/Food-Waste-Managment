//Importing Packages
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import Logo from '../../assets/foodDona1.png';

const SettingPage = (props) => {
    return(
        <View style={styles.body}>
            <View style={styles.imageOuter}>
                <Image source={Logo} alt="Our Logo" />
            </View>

            <TouchableOpacity onPress={props.Account}>
                <Text style={styles.loginTextButton}> 
                    {props.state.state.firstNav} 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={props.Exit}>
                <Text style={styles.loginTextButton}>
                    {
                        props.state.state.fourthNav
                    } 
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor:"black",
        height:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    loginTextButton:{
        color:"white",
        fontSize:25,
        paddingTop:30,
        borderBottomColor:"white",
        borderBottomWidth:1
    },
    imageOuter:{
        marginTop:-100
    },
})
export default SettingPage;