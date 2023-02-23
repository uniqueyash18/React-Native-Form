import { View,Text,Button } from "react-native"
import { styles } from "./loginStyle"
import TextImputcomp from "../../Component/TextInputcomp"

export const Login=()=>{
    return(
        <View style={{alignItems:"center"}}>
            <Text style={styles.heading}>Login With Your Details</Text>
            <TextImputcomp place="Enter Your Email Id"  />
            <TextImputcomp place="Enter Your Password" style={{marginBottom:20}} texttype={true}/>
            <Button title="SUBMIT" color="black"></Button>
        </View>
    )
}