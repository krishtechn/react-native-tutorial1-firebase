import { View, Text,StyleSheet,StatusBar,ScrollView,Alert,TextInput,TouchableOpacity,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { auth,signInWithEmailAndPassword } from '../firebase/firebase_config';

const SignIn = ({navigation}) => {
    const [eicon,seteicon] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [picon,setpicon] = useState("");
    const [pshow,setpshow] = useState(true);
    const [cpassword,setcpassword] = useState("");
    const [cshow,setcshow] = useState(true);

  return (
    <SafeAreaView style={styled.Container}>
        <StatusBar barStyle="light-content" animated={true} backgroundColor='#009387' />

        <View style={{marginTop:100,padding:30,height:"20%"}}>
          <Text style={styled.htext}>Welcome Please SignIn!</Text>
            </View>
            <Animatable.View Duration="1500" animation="fadeInUp" style={styled.scontainer}>
            <ScrollView>
              <View style={{padding:24}}>
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

             <Text style={styled.inputhead}>Confirm Password</Text>
             <View style={styled.inputfield}>
             <TouchableOpacity>
                <Text style={{fontSize:20,marginRight:5}}>+</Text>
             </TouchableOpacity>
             <TextInput value={cpassword} secureTextEntry={cshow} onChangeText={(e)=>{
                 setcpassword(e);
                 if(cpassword.length <= 1){
                     setcshow("");
                 }else{
                     setcshow("+");
                 }
             }} style={styled.input} placeholder='your confirm password'/>
             
             <TouchableOpacity onPress={()=>{
               cpassword?setcshow(false):setcshow(true);
             }}><Text style={{fontSize:26,marginRight:5}}>{cshow}</Text></TouchableOpacity>
             </View>

            <TouchableOpacity onPress={()=>{
              if(email == ""){
                Alert.alert("Error Message","Email can't be Blank");
              }else if(password == ""){
                Alert.alert("Error Message","Password can't be Blank");
              }else if(cpassword == ""){
                Alert.alert("Error Message","Confirm Password can't be Blank");
              }else if(password !== cpassword){
                Alert.alert("Error Message","Password and confirm password can be match");
              }else if(password == cpassword){
                signInWithEmailAndPassword(auth,email,password).then((re)=>{
                  console.log(re);
                  Alert.alert("Login Success","you are Login");
                  navigation.navigate("Home");
                }).catch((re)=>{
                  Alert.alert("please Enter a correct Email and Password");
                })
              }
              // else if(password != cpassword){
              //   Alert.alert("Error Message","Password & Confirm Password can't be Blank");
              // }else
            }
            // else if(password !== cpassword){
            //   Alert.alert("Error Message","Password and confirm Password can't be Blank");
            // }
              } style={[styled.btn,{backgroundColor:"rgb(30, 155, 145)",}]}>
                <Text style={{textAlign:"center",textTransform:"capitalize",color:"white",fontSize:20,letterSpacing:3}}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
              navigation.navigate("SignUP");
              }
            } style={[styled.btn,{borderColor:"blue",borderWidth:1}]}>
                <Text style={{textAlign:"center",textTransform:"capitalize",fontSize:20,fontWeight:"bold",letterSpacing:3}}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styled.btn,{backgroundColor:"rgb(33, 75, 107)"}]}>
              <Text style={{textAlign:"center",fontWeight:"bold",color:"white",letterSpacing:1,padding:6}}>Sign in with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styled.btn,{backgroundColor:"rgb(246, 101, 60)"}]}>
              <Text style={{textAlign:"center",fontWeight:"bold",color:"white",letterSpacing:1,padding:6}}>Sign in with Facebook</Text>
            </TouchableOpacity>

            </View>
            </ScrollView>
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
      fontSize:33,
      fontWeight:"bold",
      color:"white",
  },
  scontainer:{
    backgroundColor:"white",
    width:"100%",
    height:"70%",
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
    marginBottom:40,
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

export default SignIn