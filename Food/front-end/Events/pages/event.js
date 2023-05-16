import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

import Logo from '../../assets/foodDona1.png';
const EventPage = (props) => {
    return(
        <View style={styles.body}>
            <View style={styles.imageOuter}>
                <Image source={Logo} alt="Our Logo" />
            </View>

            <TouchableOpacity onPress={props.createEvent}>
                <Text style={styles.loginTextButton}> 
                    Create Event 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={props.myEvents}>
                <Text style={styles.loginTextButton}>
                    My Events
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={props.browseEvents}>
                <Text style={styles.loginTextButton}>
                    Browse Events
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={props.Exit}>
                <Text style={styles.loginTextButton}>
                    Exit
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

export default EventPage;