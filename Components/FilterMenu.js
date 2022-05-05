import { View, Text,ScrollView,StyleSheet,TouchableOpacity, } from 'react-native'
import React,{useState} from 'react'
import data from "./CardApi";
import menu from './CardApi';
import { Button } from 'react-native-paper';


const FilterMenu = () => {
    
  const [cdata,setcdata] = useState(data);

  const filterItem = (categItem)=>{
    const d = data.filter((fdata)=>{
      return fdata.category == categItem;
    })
    return setcdata(d);
 }



  return (
    <ScrollView style={styled.Container}>
    <View style={styled.btncontainer}>
      <TouchableOpacity style={styled.btn} onPress={()=>setcdata(menu)}><Text>All</Text></TouchableOpacity>
      <TouchableOpacity style={styled.btn} onPress={()=>filterItem("css")}><Text>CSS</Text></TouchableOpacity>
      <TouchableOpacity style={styled.btn} onPress={()=>filterItem("html")}><Text>Html</Text></TouchableOpacity>
    </View>
    <View style={styled.cards}>
      {
        cdata.map((items,key)=>{
          return  <View style={styled.card} key={key}>
          <Text style={styled.head}>{items.title}</Text>
          <Text>{items.desc}</Text>
          <Button style={styled.cbtn}>{items.btn}</Button>
        </View>
        })
      }
      
    </View>
  </ScrollView>
  )
}


const styled = StyleSheet.create({
    Container:{
      width:"100%",
    },
    btncontainer:{
      display:"flex",
      justifyContent:"space-evenly",
      width:"100%",
      flexDirection:"row",
      marginVertical:40,
    },
    btn:{
       backgroundColor:"gray",
       padding:10,
       paddingLeft:30,
       paddingRight:30,
       borderRadius:10,
    },
    cards:{
       display:"flex",
       justifyContent:"center",
       marginHorizontal:10,
       alignItems:"center",
      },
      card:{
        backgroundColor:"#fff",
        borderRadius:10,
        margin:10,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
      },
    head:{
        fontSize:20,
        textAlign:"center",
        letterSpacing:1,
        textTransform:'capitalize',
    },
    cbtn:{
        marginTop:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
            }
  })
  

export default FilterMenu