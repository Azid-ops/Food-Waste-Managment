import { View,ScrollView,Text,StyleSheet,Image, TouchableOpacity } from "react-native";

import Resto from '../../assets/restoo.png';
import NGO from '../../assets/ngo.png';

const AccountPage = (props) => {
    return(
        !props.check ? <View style={styles.body}>
            <View style={styles.RestoContainer}>
                <Text style={styles.bodyText} >Continue As:</Text>
                <TouchableOpacity 
                    onPress={()=> props.selectAccount("Restaurant")}
                >
                    <Image style={styles.Resto} source={Resto} />
                </TouchableOpacity>
                <Text style={styles.bodyText} >RESTARANT</Text>
            </View>

            <View style={styles.RestoContainer}>
                <TouchableOpacity
                    onPress={()=> props.selectAccount("NGO")}
                >
                    <Image style={styles.Resto} source={NGO} />
                </TouchableOpacity>
                <Text style={styles.bodyText} >NGO</Text>
            </View>
        </View> :<ScrollView style={styles.body}>
            <TouchableOpacity onPress={props.openSetting}>
                <Text style={styles.welcomeNote}>Setting</Text>
            </TouchableOpacity>
            <Text style={styles.bodyText}>You are Registered with {props.myData.accountType} account</Text>
            <Text style={styles.galleryText}>Your Food Gallery:</Text>

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
                                        Delete
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
    noFoodText:{
        color:"white",
        textAlign:"center",
        alignContent:"center",
        fontSize:30,
        marginTop:"50%"
    },
    bodyText:{
        color:"white",
        fontSize:25,
        textAlign:"center"
    },
    continueText:{
        color:"white",
        fontSize:25,
        paddingTop:10
    },
    Resto:{
        width:300,
        height:300
    },
    RestoContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
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
    backgroundView:{
        backgroundColor:"red",
        width:"30%",
        alignItems:"center",
        paddingTop:10,
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
        marginTop:10
    },
    foodBy:{
        color:"white",
        textAlign:"left",
        fontSize:17,
        paddingLeft:10,
        marginTop:80
    },
    galleryText:{
        color:"white",
        fontSize:20,
        marginTop:60
    }
})

export default AccountPage;