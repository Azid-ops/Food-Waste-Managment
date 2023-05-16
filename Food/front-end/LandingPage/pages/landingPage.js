import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import Logo from '../../assets/foodDona1.png';

const LandingPage = (props) => {
  return (
    <ScrollView style={styles.myBody}>
        <View style={styles.imageOuter}>
            <Image source={Logo} alt="Our Logo" />
        </View>
        <Text style={styles.myText}>Stop Wasting Food by Donating It</Text>
        <View style={styles.outerDiv}>
            <TouchableOpacity onPress={props.loginClicked} style={styles.innerLoginDiv}>
                <Text style={styles.divText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.signupClicked} style={styles.innerSignupDiv}>
                <Text style={styles.divText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>    
  );
}

const styles = StyleSheet.create({
    myBody: {
        backgroundColor:"black",
        height:"100%"
    },
    myText:{
        textAlign:"center",
        color:"white",
        fontSize:20,
        marginTop:20
    },
    imageOuter:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:200
    },
    outerDiv:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    divText:
    {
        color:"white",
        textAlign:"center"
    },
    innerLoginDiv:{
        marginTop:10,
        borderColor:"purple",
        borderTopWidth:1,
        borderBottomWidth:2,
        borderRightWidth:1,
        borderLeftWidth:1,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:15,
        paddingRight:15,
        width:"30%",
        borderRadius:10,
        backgroundColor:"purple",
    },
    innerSignupDiv:{
        marginTop:10,
        borderColor:"purple",
        borderTopWidth:1,
        borderBottomWidth:1,
        borderRightWidth:1,
        borderLeftWidth:1,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:15,
        paddingRight:15,
        width:"30%",
        borderRadius:10,
        backgroundColor:"purple"
    }
})

export default LandingPage;