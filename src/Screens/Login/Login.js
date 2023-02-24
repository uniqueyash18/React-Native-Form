import { View,Text,Button } from "react-native"
import { styles } from "./loginStyle"
import TextImputcomp from "../../Component/TextInputcomp"

export const Login=({navigation})=>{
    return(
        <View style={{alignItems:"center"}}>
            <Text style={styles.heading}>Login With Your Details</Text>
            <TextImputcomp place="Enter Your Email Id"  />
            <TextImputcomp place="Enter Your Password" style={{marginBottom:20}} texttype={true}/>
            <Button title="SUBMIT" onPress={()=>navigation.navigate('Test1')} color="black"></Button>
            <View style={{marginTop:10}}>
            <Button onPress={() => navigation.goBack()} title="  Back  " color={"red"}/>
            </View>
        </View>
    )
}