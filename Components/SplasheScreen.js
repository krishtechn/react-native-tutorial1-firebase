import { View, Text,StyleSheet,Image,TouchableOpacity,StatusBar,SafeAreaView } from 'react-native'
import React from 'react';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
    
  return (
    <SafeAreaView style={styled.containers}>
        <StatusBar barStyle="light-content" animated={true} backgroundColor='#009387' />

 <View style={styled.container}>
      <Animatable.Image animation="bounceIn" Duration="2000" source={require("../assets/download.png")} style={[styled.img,styled.shadows]}/> 
      </View>
    <Animatable.View animation="fadeInUp" Duration="1500" style={styled.RegisterContainer}>
          <View>
          <Text style={styled.rhead}>Stay connected with everyone!</Text>
          <Text style={styled.rsubhead}>signup with account</Text>
          </View>

        <Animatable.View style={styled.btncontainer} Duration={3} animation="bounceInLeft">
            <TouchableOpacity onPress={()=>navigation.navigate("SignIn")} style={styled.button}>
              <Text style={[styled.btntext,{letterSpacing:1}]}>Get started</Text>
              </TouchableOpacity>
          </Animatable.View>
    </Animatable.View>
   
    </SafeAreaView>
  )
}


const styled = StyleSheet.create({
  containers:{
    width:"100%",
    height:"100%",
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"column",
    backgroundColor:"rgb(6, 133, 123)",
    alignItems:"center",
  },
  container:{
    width:"100%",
    height:"60%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  shadows:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  img:{
    borderRadius:100,
    width:"35%",
    borderColor:"white",
    borderWidth:5,
  },
  RegisterContainer:{
    backgroundColor:"white",
    height:"80%",
    width:"100%",
    padding:30,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
  },
  rhead:{
    fontSize:30,
    textTransform:"capitalize",
    fontWeight:"bold",
    color:"rgb(6, 133, 123)",
    letterSpacing:2,
    fontFamily:"Inter_200ExtraLight",
  },
  rsubhead:{
    marginTop:10,
    textTransform:"capitalize",
    letterSpacing:3,
    fontWeight:"normal",
    color:"black",
  },
  btncontainer:{
    display:'flex',
    marginVertical:50,
    alignItems:"flex-end",
  },
  button:{
    backgroundColor:"rgb(30, 155, 145)",
    padding:8,
    paddingLeft:30,
    paddingRight:30,
    borderRadius:40,
  },
  btntext:{
    color:"white",
    textTransform:"capitalize",
    fontWeight:"500",
    letterSpacing:1,
  }
})

export default SplashScreen