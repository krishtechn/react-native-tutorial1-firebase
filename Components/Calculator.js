import { View, Text,StyleSheet, TextInput, TouchableOpacity,StatusBar,useWindowDimensions } from 'react-native'
import React, { useState } from 'react'

const Calculator = () => {

    const [input,setinput] = useState();
    const width = useWindowDimensions().width;
    
    let calculate = (operators)=>{
        try{
            let num = operators.toString();
            num += input;
            setinput(num);    
        }catch(Execption){

        }
    }   

    let clear = ()=>{
    //  let b = input == "Undefined"?setinput("Undefined"):setinput(0);
     setinput(0);
    }

    let ClearOne = ()=>{
        let a = input.slice(0,-1);
        setinput(a);
    }

    let equal = ()=>{
        if(input == 'Undefined'){
            setinput(0);
        }else{
            let n1 = eval(input);
            let ntype = n1.toString();
            setinput(ntype);
        }
    }



  return (
    <View style={[styled.container,{width:width}]}>
        <StatusBar barStyle='light-content'/>

        <View style={styled.calculator}>
        <TextInput value={input} style={styled.input} onChangeText={(e)=>setinput(e)}/>
         
         <View style={styled.row}>
         <TouchableOpacity onPress={()=>calculate(1)} style={styled.btn}>
                <Text style={styled.btntxt}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>calculate(2)} style={styled.btn}>
                <Text style={styled.btntxt}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>calculate(3)} style={styled.btn}>
                <Text style={styled.btntxt}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>clear()} style={[styled.btn,{backgroundColor:"rgb(196, 174, 33)",width:"30%"}]}>
                <Text style={[styled.btntxt,{color:"red"}]}>C</Text>
            </TouchableOpacity>
         </View>

         <View style={styled.row}>
         <TouchableOpacity onPress={()=>calculate(4)} style={styled.btn}>
                <Text style={styled.btntxt}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>calculate(5)} style={styled.btn}>
                <Text style={styled.btntxt}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>calculate(6)} style={styled.btn}>
                <Text style={styled.btntxt}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>calculate('+')} style={[styled.btn,{backgroundColor:"rgb(196, 174, 33)",width:"30%"}]}>
                <Text style={[styled.btntxt,{color:"black"}]}>+</Text>
            </TouchableOpacity>
         </View>

         <View style={styled.row}>
         <TouchableOpacity onPress={()=>calculate(7)} style={styled.btn}>
                <Text style={styled.btntxt}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>calculate(8)} style={styled.btn}>
                <Text style={styled.btntxt}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>calculate(9)} style={styled.btn}>
                <Text style={styled.btntxt}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>calculate('-')} style={[styled.btn,{backgroundColor:"rgb(196, 174, 33)",width:"30%"}]}>
                <Text style={[styled.btntxt,{color:"black"}]}>-</Text>
            </TouchableOpacity>
         </View>

         <View style={styled.row}>
         <TouchableOpacity onPress={()=>calculate(0)} style={styled.btn}>
                <Text style={styled.btntxt}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>calculate('*')} style={styled.btn}>
                <Text style={styled.btntxt}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>calculate('/')} style={styled.btn}>
                <Text style={styled.btntxt}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>calculate('%')} style={[styled.btn,{backgroundColor:"rgb(196, 174, 33)",width:"30%"}]}>
                <Text style={[styled.btntxt,{color:"black"}]}>%</Text>
            </TouchableOpacity>
         </View>

         <View style={styled.row}>
            <TouchableOpacity onPress={()=>equal()} style={[styled.btn,{backgroundColor:"red",width:'30%',position:'absolute',right:10}]}>
                <Text style={[styled.btntxt,{color:"white"}]}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>ClearOne()} style={[styled.btn,{backgroundColor:"rgb(196, 174, 33)",width:"30%"}]}>
                <Text style={[styled.btntxt,{color:"black"}]}>AC</Text>
            </TouchableOpacity>
         </View>

        </View>
    </View>
  )
}
const styled = StyleSheet.create({
    container:{
        height:'100%',
    },
    calculator:{
        backgroundColor:"#000",
        width:"100%",
        height:"100%",
    },
    input:{
        borderBottomColor:"#333",
        borderWidth:0.4,
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:20,
        width:"100%",
        fontSize:50,
        color:"white",
        marginTop:10,
        fontWeight:"bold",
    },
    row:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:20,
        marginTop:30,
        marginBottom:12,
        paddingBottom:20,
    },
    btn:{
        backgroundColor:"rgb(196, 182, 182)",
        width:80,
        height:80,
        borderRadius:50,
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        
        elevation: 22,
    },
    btntxt:{
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold",
        color:"#000",
        marginTop:10,
        width:"100%",
    },
})


export default Calculator