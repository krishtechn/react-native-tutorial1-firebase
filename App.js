import {View,Text,ActivityIndicator} from "react-native";
import React, { useState, useEffect } from 'react';
import SplashScreen from './Components/SplasheScreen'
import AppLoading from 'expo-app-loading';
import SignIn from './Components/SignIn';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from './Components/SignUp';
import Home from './Components/Home';


import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import BottomTabNavigator from "./Components/BottomTabNavigator";


const App = () => {
  const [isloading,setisloading] = useState(true);
  const [userToken,setuserToken] = useState(null);

  const authContext = React.useMemo(()=>{
    SignIn:()=>{
        setuserToken("dfkdkf");
        setisloading(false);
    };
    signout:()=>{
      setuserToken(null);
      setisloading(false);
    };
    signUp:()=>{
      
    };
  })

  useEffect(()=>{
    console.disableYellowBox = true;
    setTimeout(() => {
      setisloading(false);
    }, 1000);
  })


  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    const Stack = createNativeStackNavigator();
    
  if(isloading){
    return (
      <View style={{display:"flex",justifyContent:"center",height:"100%"}}>
        <ActivityIndicator size="large" color="#999999" />
      </View>
    );
  }
  return (
    <>
         <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen options={{headerShown: false,statusBarStyle:"dark"}} name="SplashScreen" component={SplashScreen} />
            <Stack.Screen options={{headerShown:false}} name="SignIn" component={SignIn} />
            <Stack.Screen options={{headerShown:false}} name="SignUP" component={SignUp} />
            <Stack.Screen options={{title:"overview",headerBackButtonMenuEnabled:true,headerShown:false,headerBackTitle:"this is head",headerBackVisible:false,headerSearchBarOptions:true,statusBarStyle:"dark",headerTitle:"home",headerBackImageSource:"./assets/download.png",headerBlurEffect:"systemChromeMaterialDark"}} name="Home" component={Home} />
            {/* <Stack.Screen options={{title:"overview",headerShown:false,statusBarStyle:"dark",headerTitleStyle:{
              // // color:""
              fontSize:20,
              // fontWeight:"bold",
            },
            headerStyle:{
              backgroundColor:"#009387",
            },
            headerTintColor:"white",
          }} name="Home" component={Home}/>
        */}
          </Stack.Navigator> 
           </NavigationContainer>
           </>
  )
}
}


export default App;