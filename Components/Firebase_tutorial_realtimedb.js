import { View, Text } from 'react-native'
import React from 'react'
import { database,ref,set,update,onValue,child,get } from '../firebase/firebase_config'
import { getAuth } from 'firebase/auth'
import { getDatabase,onvalue } from 'firebase/database'


const Firebase_tutorial = () => {
//write data into firebase realtime database
// function writeUserData(userId,name,email){
//   set(ref(database,'users/'+userId),{
//     username:name,
//     email:email
//   })
// }

// writeUserData(2,"janaki","janaki");

// update data into firebase realtime database 
//  function UpdateUserData(userId,name,email){
//    update(ref(database,`users/${userId}`),{
//       username:name,
//       email:email,
//    })
//  }

// UpdateUserData(2,"Nabin","Nabin@gmail.com");

// generate random Id 
// const apikey = auth.config.apiKey;
// const auth = getAuth();
// const userId = auth.currentUser.uid;
// console.log(userId);


// read userdata with id in firebase 

// function ReadUserData(userId){
//   const dbRef = ref(database);
//   get(child(dbRef,`users/${userId}`)).then((snapshot)=>{
//     if(snapshot.exists()){
//       console.log(snapshot.val().email);
//     }else{
//       console.log("No data available");
//     }
//   })
// }

// ReadUserData(1);

// fetch all data from firebase realtime database 
const db = getDatabase();
const auth = getAuth();

// const userId = auth.currentUser.uid;
return onValue(ref(db, '/users/' + 2), (snapshot) => {
  const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  console.log(username);
  // if(username == "krish"){
  //   console.log("you are login");
  // }else{
  //   console.log("you are not login");
  // }
}, {
  onlyOnce: true
});


  return (
    <View>
      <Text>Firebase_tutorial</Text>
    </View>
  )
}

export default Firebase_tutorial
