import { StyleSheet } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
const styles = StyleSheet.create({
  maindiv: {
    flex:1,
    backgroundColor:"#ECE2BD",
  },
  heading: {
    alignSelf: "center",
    fontSize:30,
    fontWeight:"bold",
    marginBottom:moderateVerticalScale(24),
    marginTop:moderateVerticalScale(50),
    textDecorationLine:"underline",   
    color:'black' 
  },
  btnarea:{
    alignItems:"center",
    flex:1
  },
  logintxt:{flexDirection:"row", justifyContent:"center"}
})
export { styles };
