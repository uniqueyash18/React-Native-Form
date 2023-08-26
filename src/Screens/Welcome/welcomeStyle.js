import { StyleSheet } from "react-native"
import { moderateVerticalScale,moderateScale } from "react-native-size-matters";
export const styles= StyleSheet.create({
main:{paddingHorizontal:20,
    flex:1,
justifyContent:'center',
backgroundColor: "white",
// borderRadius:'10'
},
upper:{
    flex:0.9,},
lowertext:{
    textAlign:"center",
    fontSize:16,
    marginTop:moderateVerticalScale(30)
},
img:{ 
width:moderateScale(200),
height:moderateVerticalScale(100),
alignSelf:"center"
},
images:{marginTop:moderateVerticalScale(30),
    flexDirection:"row",
    justifyContent:"space-between"
},
banner:{
    width:moderateScale(200),
    height:moderateVerticalScale(120),
    resizeMode:'contain'
},
heading:{
    marginBottom:moderateVerticalScale(20),
    fontSize:30,
    textAlign:"center",
    color:"#8BC540",
    fontWeight:"bold"
}
})
