import { View,Text,Button,Image } from "react-native"
import { styles } from "./loginStyle"
import TextImputcomp from "../../Component/TextInputcomp"
import { useState } from "react"
import StringConstants from "../../Constants/StringConstants"

export const Login=({navigation},{value})=>{
    const[uname,setUname]=useState("")
    const[pass,setPass]=useState("")
    function valid(){
        if(!uname.trim()){
            alert(StringConstants.Please_enter_your_username)
        } 
        else if(!pass.trim()){
            alert(StringConstants.Please_enter_your_password)
        }else{
            navigation.navigate('Form')
        }
    }
    return(
        <View style={{alignItems:"center", backgroundColor:"#ECE2BD", flex:1}}>
            <Text style={styles.heading}>{StringConstants.Login_With_Your_Details}</Text>
            <Image source={{uri:"https://images.squarespace-cdn.com/content/v1/5fb03bb53d280f2b635b98ca/1622162818498-RYLGX709PS7CGXZO66IS/portfolio-drawing-gif-web-v2.gif"}} style={{width:200,height:100}}/>
            <TextImputcomp place="Enter Your username" onchange={(val) =>setUname(val)} />
            <TextImputcomp place="Enter Your Password" style={{marginBottom:20}} texttype={true} onchange={(val) =>setPass(val)}/>
            <Button title={StringConstants.Submit} onPress={valid} color="black"></Button>
            <View style={{marginTop:10}}>
            <Button onPress={() => navigation.goBack()} title={StringConstants.Back} color={"red"}/>
            </View>
        </View>
    )
}