import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput} from 'react-native';

import Logo from '../../assets/foodDona1.png';

const CreateEventPage = (props) => {
    return(
        <View style={styles.body}>
            <View style={styles.imageOuter}>
                <Image source={Logo} alt="Our Logo" />
            </View>
            <View style={styles.inputDiv}>
                
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Enter Event Name'
                    placeholderTextColor="white"
                    onChangeText={props.setEventName}
                />

                <TextInput 
                    style={styles.textInput} 
                    placeholder='Enter Event Food'
                    placeholderTextColor="white"
                    onChangeText={props.setEventFood}
                />

                <TextInput 
                    style={styles.textInput} 
                    placeholder='Enter Quantity'
                    placeholderTextColor="white"
                    onChangeText={props.setEventQuantity}
                />

                <TextInput 
                    style={styles.textInput} 
                    placeholder='Event Image Link'
                    placeholderTextColor="white"
                    onChangeText={props.setEventImage}
                />

            </View>

            <TouchableOpacity onPress={props.postEvent} style={styles.loginButton}>
                <Text style={styles.loginTextButton}>Create Event</Text>
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
    },
    inputDiv:{
        width:"75%",
        margin:0,
    },
    textInput:{
        borderColor:"white",
        marginTop:40,
        borderRadius:6,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        paddingLeft:5,
        color:"white",
        height:35
    },
    loginButton:{
        borderColor:"purple",
        marginTop:40,
        borderRadius:6,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        justifyContent:"center",
        alignItems:"center",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:90,
        paddingRight:90,
        backgroundColor:"purple",
    },
    forgotPassword:{
        fontSize:15,
        color:"white",
    },
    forgotPasswordView:{
        marginTop:10,
    },
    imageOuter:{
        marginTop:-40
    }
})

export default CreateEventPage;