import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Importing Packages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importing Files
import LandingComponent from './LandingPage/components/landingPage';
import LoginComponent from './Login/components/login';
import SignupComponent from './Signup/components/signup';
import VerificationComponent from './Verification/components/verification';
import DashboardComponent from './Dashboard/components/dashboard';
import ForgotPasswordComponent from './ForgotPassword/components/forgotPassword';
import SettingComponent from './Setting/components/setting';
import AccountComponent from './Account/components/accounts';
import AddFood from './AddFood/components/addFood';
import Event from './Events/components/event';
import CreateEvent from './Events/components/createEvent';
import MineEvents from './Events/components/myEvents';
import BrowseEvents from './Events/components/browseEvents';

const App = () => {

  //Creation Navigation Object
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LandingComponent} />
        <Stack.Screen name="Login" component={LoginComponent} />
        <Stack.Screen name="Signup" component={SignupComponent} />
        <Stack.Screen name="Verification" component={VerificationComponent} />
        <Stack.Screen name="Dashboard" component={DashboardComponent} />
        <Stack.Screen name="Forgot Password" component={ForgotPasswordComponent} />
        <Stack.Screen name="Setting" component={SettingComponent} />
        <Stack.Screen name="Account" component={AccountComponent} />
        <Stack.Screen name="AddFood" component={AddFood} />
        <Stack.Screen name="Events" component={Event} />
        <Stack.Screen name="Create" component={CreateEvent} />
        <Stack.Screen name="MyEvents" component={MineEvents} />
        <Stack.Screen name="Browse" component={BrowseEvents} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;