//Importing Packages
import { StyleSheet, Text, View } from 'react-native';

//Importing Pages
import LandingPage from '../pages/landingPage';

const LandingComponent = (props) => {

  const loginClicked = () => {
    props.navigation.navigate("Login");
  }

  const signupClicked = () => {
    props.navigation.navigate("Signup");
  }
  
  return (
    <LandingPage loginClicked={loginClicked} signupClicked={signupClicked} />  
  );
}

export default LandingComponent;