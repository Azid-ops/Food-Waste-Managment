//Importing Packages
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import Logo from '../../assets/foodDona1.png';

const SignupPage = (props) => {
    return(
        <View style={styles.body}>
            <View style={styles.imageOuter}>
                <Image source={Logo} alt="Our Logo" />
            </View>
            <View style={styles.inputDiv}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Enter your Name'
                    name="fname"
                    placeholderTextColor="white"
                    onChangeText={props.setFName}
                />
                
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Enter your Email'
                    name="email"
                    placeholderTextColor="white"
                    onChangeText={props.setEmail}
                />

                {
                    props.userExist ?
                        <Text 
                            style={styles.errorMessages}
                        >
                            {props.userExist}
                        </Text>
                     : null
                }

                {
                    props.validEmail ?
                        <Text 
                            style={styles.errorMessages}
                        >
                            {props.validEmail}
                        </Text>
                     : null
                }

                <TextInput 
                    style={styles.textInput} 
                    placeholder='Enter Your Password'
                    name="password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                    onChangeText={props.setPassword}
                />

                {
                    props.shortPassword ?
                        <Text 
                            style={styles.errorMessages}
                        >
                            {props.shortPassword}
                        </Text>
                     : null
                }

                <TextInput 
                    style={styles.textInput} 
                    placeholder='Re-type Your Password'
                    name="retype"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                    onChangeText={props.setReType}
                />

                {
                    props.identicalPassword ?
                        <Text 
                            style={styles.errorMessages}
                        >
                            {props.identicalPassword}
                        </Text>
                     : null
                }

                <TextInput 
                    style={styles.textInput} 
                    placeholder='Enter Phone Number'
                    name="phoneNumber"
                    placeholderTextColor="white"
                    onChangeText={props.setPhoneNumber}
                />

            </View>

            <View style={styles.forgotPasswordView}>
                <Text 
                    style={styles.forgotPassword}
                    onPress={() => props.navigation.navigate("Login")}
                >
                    New Here? Login
                </Text>
            </View>

            <TouchableOpacity onPress={props.signedUp} style={styles.loginButton}>
                <Text style={styles.loginTextButton}>Signup</Text>
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
    }
})
export default SignupPage;