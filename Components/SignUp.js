import { View, Text,StyleSheet,StatusBar,TextInput,TouchableOpacity,SafeAreaView,Alert } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { auth,createUserWithEmailAndPassword } from '../firebase/firebase_config';


const SignUp = ({navigation}) => {
    const [eicon,seteicon] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [picon,setpicon] = useState("");
    const [pshow,setpshow] = useState(true);

  return (
      <SafeAreaView style={styled.Container}>
        <StatusBar barStyle="light-content" animated={true} backgroundColor='#009387' />

        <View style={{marginTop:100,padding:30,height:"20%"}}>
          <Text style={styled.htext}>Welcome Please SignUp!</Text>
            </View>
            <Animatable.View Duration="1500" animation="fadeInUp" style={styled.scontainer}>
            
             <Text style={styled.inputhead}>Email</Text>
             <View style={styled.inputfield}>
             <TouchableOpacity>
                <Text style={{fontSize:20,marginRight:5}}>+</Text>
             </TouchableOpacity>
             <TextInput onChangeText={(e)=>{
                 setemail(e);
                 if(email.length == 1 || email.length == 0){
                     seteicon("");
                 }else{
                     seteicon("+");
                 }
             }} style={styled.input} placeholder='your Email'/>
             <Text style={{fontSize:26,marginRight:5}}>{eicon}</Text>
             
             </View>

             <Text style={styled.inputhead}>Password</Text>
             <View style={styled.inputfield}>
             <TouchableOpacity>
                <Text style={{fontSize:20,marginRight:5}}>+</Text>
             </TouchableOpacity>
             <TextInput secureTextEntry={pshow} onChangeText={(e)=>{
                 setpassword(e);
                 if(password.length <= 1){
                     setpicon("");
                 }else{
                    setpicon("+");
                 }
             }} style={styled.input} placeholder='your password'/>
             <TouchableOpacity onPress={()=>{
               pshow?setpshow(false):setpshow(true);
             }}><Text style={{fontSize:26,marginRight:5}}>{picon}</Text></TouchableOpacity>
             </View>

            <TouchableOpacity onPress={()=>{
              if(email == ""){
                Alert.alert("Error Message","Email can't be blank");
              }else if(password == ""){
                Alert.alert("Error Message","Password can't be blank");
              }else if(password.length < 6){
                Alert.alert("Error Message","Password most be at least 6 char");
              }else{
                createUserWithEmailAndPassword(auth,email,password).then((re)=>{
                  Alert.alert("Success Message","data inserted Successfully");
                }).catch((re)=>{
                  alert("Error Message","data can't inserted");
                })
               
              }
            }} style={[styled.btn,{backgroundColor:"rgb(30, 155, 145)",}]}>
                <Text style={{textAlign:"center",textTransform:"capitalize",color:"white",fontSize:20,letterSpacing:3}}>SignUp</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.goBack("SignIn")} style={[styled.btn,{borderColor:"blue",borderWidth:1}]}>
                <Text style={{textAlign:"center",textTransform:"capitalize",fontSize:20,fontWeight:"bold",letterSpacing:3}}>Sign In</Text>
            </TouchableOpacity>
            </Animatable.View>
        </SafeAreaView>
  )
}

const styled= StyleSheet.create({
  Container:{
     backgroundColor:"rgb(6, 133, 123)",
     width:"100%",
     height:"100%",
     display:"flex",
     justifyContent:"space-between",
     flexDirection:"column",
  },
  htext:{
    fontSize:30,
    fontWeight:"bold",
    color:"white",
  },
  scontainer:{
    backgroundColor:"white",
    width:"100%",
    height:"70%",
    padding:20,
    paddingTop:50,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
  },
  inputhead:{
      color:"black",
      fontWeight:"100",
      letterSpacing:1,
      fontSize:16,
  },
  inputfield:{
    padding:5,
    flexDirection:"row",
    width:"100%",
    display:"flex",
    width:"95%",
    alignItems:"center",
    marginBottom:20,
  },
  input:{
      padding:10,
      fontSize:16,
      marginLeft:3,
      width:"100%",
      letterSpacing:2,
  },
  btn:{
    padding:8,
    paddingLeft:30,
    paddingRight:30,
    borderRadius:40,
    marginBottom:30,
  }
})

export default SignUp