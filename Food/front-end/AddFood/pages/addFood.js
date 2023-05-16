//Importing Packages
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import Logo from '../../assets/foodDona1.png';

const AddFoodPage = (props) => {
    return(
        <View style={styles.body}>
            <View style={styles.imageOuter}>
                <Image source={Logo} alt="Our Logo" />
            </View>
            <View style={styles.inputDiv}>
                
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Enter Food Name'
                    placeholderTextColor="white"
                    onChangeText={props.setFoodName}
                />

                <TextInput 
                    style={styles.textInput} 
                    placeholder='Enter Food Image Link'
                    placeholderTextColor="white"
                    onChangeText={props.setFoodImageLink}
                />

                <TextInput 
                    style={styles.textInput} 
                    placeholder='Enter Food Quantity'
                    placeholderTextColor="white"
                    onChangeText={props.setFoodQuantity}
                />

                {
                    props.wrongCredientials ?
                        <Text 
                            style={styles.errorMessages}
                        >
                            {props.wrongCredientials}
                        </Text>
                     : null
                }

            </View>

            <TouchableOpacity onPress={props.triggerLogin} style={styles.loginButton}>
                <Text style={styles.loginTextButton}>Add Food</Text>
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
        width:"40%",
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
        marginTop:-100
    },
    errorMessages:{
        color:"red",
        marginTop:2
    },
    forgotPassword:{
        fontSize:15,
        color:"white",
    },
    forgotPasswordView:{
        marginTop:10,
    },
})
export default AddFoodPage;