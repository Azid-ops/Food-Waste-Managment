import { View,Text,StyleSheet, TouchableOpacity,ScrollView,Image } from 'react-native';

import { FontAwesomeIcon,SolidIcons } from '@fortawesome/react-native-fontawesome'


const DashboardPage = (props) => {
    return(
        <ScrollView style={styles.body}>
            <Text style={styles.welcomeNote}>Welcome: {props.email}</Text>
            <TouchableOpacity onPress={props.openSetting}>
                <Text style={styles.welcomeNote}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.EventSetting}>
                <Text style={styles.welcomeNote}>Event</Text>
            </TouchableOpacity>

            {
                props.food.length < 1 ? <View>
                    <Text style={styles.noFoodText}>No Food Avaiable Yet</Text>
                </View>:
                props.food.map(items=>{
                    return(
                        <View style = {styles.container}>
                            <View style = {styles.redbox}>
                                <Image 
                                    source={{uri:items.foodImageLink}}
                                    style = {{ width: "100%", height: 200,marginTop:20 }}
                                />
                                <Text style={styles.ViewText}>{items.foodName}</Text>
                                <Text style={styles.tinyText}>Quantity: {items.foodQuantity}</Text>
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

export default DashboardPage;