import React from "react";
import {View,Text,ScrollView,StyleSheet,Image,TouchableOpacity,TextInput} from 'react-native';

import Logo from '../../assets/foodDona1.png';

const MyEventPage = (props) => {
    return(
        <ScrollView style={styles.body}>
            {
                props.myEvents.length < 1 ? <View>
                    <Text style={styles.noFoodText}>No Events Available yet</Text>
                </View>:
                props.myEvents.map(items=>{
                    return(
                        <View style = {styles.container}>
                            <View style = {styles.redbox}>
                                <Image 
                                    source={{uri:items.eventImage}}
                                    style = {{ width: "100%", height: 200,marginTop:20 }}
                                />
                                <Text style={styles.ViewText}>Event Name: {items.eventName}</Text>
                                <Text style={styles.tinyText}>Food Name: {items.eventFood}</Text>
                                <Text style={styles.tinyText}>Quantity: {items.eventQuantity}</Text>
                                <TouchableOpacity style={styles.backgroundView}>
                                    <Text style={styles.newText}>
                                        Add to Cart
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor:"black",
        height:"100%",
    },
    welcomeNote:{
        color:"white",
        textAlign:"right",
        fontSize:17,
        paddingRight:10,
        paddingTop:2
    },
    ViewText:{
        color:"white",
        textAlign:"left",
        fontSize:27,
        paddingRight:10,
        paddingTop:10
    },
    tinyText:{
        color:"white",
        textAlign:"left",
        fontSize:17,
        paddingRight:10,
        paddingTop:10
    },
    noFoodText:{
        color:"white",
        textAlign:"center",
        alignContent:"center",
        fontSize:30,
        marginTop:"50%"
    },
    backgroundView:{
        backgroundColor:"green",
        width:"40%",
        paddingTop:10,
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:10,
        marginTop:10
    },
    newText:{
        color:"white"
    },

    redbox: {
        width: "90%",
     },
     container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:60
    },
    foodBy:{
        color:"white",
        textAlign:"left",
        fontSize:17,
        paddingLeft:10,
        marginTop:80
    }
})

export default MyEventPage;