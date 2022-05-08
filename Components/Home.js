import { View, Text,ScrollView,Button } from 'react-native'
import React,{useState,useEffect} from 'react'
import UserProfile from './UserProfile'
import FilterMenu from './FilterMenu'
import Calculator from './Calculator'

const Home = ({navigation}) => {
  const [data,setdata] = useState([]);

  let url = "http://localhost:1337/api/products";
  // let url = "https://thapatechnical.github.io/userapi/users.json";

  const getdata =async()=>{
    let data = await fetch(url);
    let response = await data.json();
    setdata(response);
  }
  
  useEffect(()=>{
    getdata();
  },[])

  return (
    <ScrollView>
       <UserProfile />
      <FilterMenu /> 
      <Button title='Calculator' onPress={()=>navigation.navigate("Calculator")}/>
    </ScrollView>
  )
}

export default Home