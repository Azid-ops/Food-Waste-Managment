//Importing Packages
import { View,Text,StyleSheet,TouchableOpacity,Image,TextInput} from 'react-native';

//Importing Images
import Logo from '../../assets/foodDona1.png';

const VerificationPages = (props) => {
    return(
        <View style={styles.body}>
            <View style={styles.imageOuter}>
                <Image source={Logo} alt="Our Logo" />
            </View>
            <View style={styles.inputDiv}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Enter OTP'
                    name="retype"
                    placeholderTextColor="white"
                    onChangeText={props.setOtp}
                />
            </View>
            {
                props.sentOtpResult ?
                    <Text 
                        style={styles.errorMessages}
                    >
                        {props.sentOtpResult}
                    </Text>
                : null
            }
            <TouchableOpacity onPress={props.confirmOTP} style={styles.loginButton}>
                <Text style={styles.loginTextButton}>Verify</Text>
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
    loginTextButton:{
        color:"white",
        fontSize:25,
    },
    errorMessages:{
        color:"red",
        marginTop:2
    }
})

export default VerificationPages;