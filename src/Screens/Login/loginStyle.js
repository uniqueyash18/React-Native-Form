import { StyleSheet } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
export  const styles= StyleSheet.create({
    heading:{
        alignSelf: "center",
    fontSize:30,
    fontWeight:"bold",
    marginBottom:moderateVerticalScale(24),
    marginTop:moderateVerticalScale(50),
    textDecorationLine:"underline",   
    color:'black' 
    }
})