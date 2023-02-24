import { Text, View, Image, SafeAreaView, TouchableOpacity, StyleSheet,Button } from 'react-native';
import { useState } from 'react';


export const Test1=({navigation})=> {
       const [age, newage] = useState('1')
       function checkAge() {
              if (age < 18) {
                     newage("❌You are not eligible for Driving  because you are under age❌")
              }
              else if (age >= 18 && age < 70) {
                     newage("✅Hurray!!! You are eligible for Driving ✅")
              }
              else if (age >= 70) {
                     newage("❌You are not eligible for Driving❌")
              }
       }
       return (
              <SafeAreaView style={styles.container}>
                     <View style={styles.upperview}>
                            <Text style={styles.age}>{age}</Text>
                     </View>
                     <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.btn} onPress={checkAge}>
                            <Text style={styles.btntext}>SAVE</Text>
                     </TouchableOpacity>
                     <Button onPress={() => navigation.goBack()} title="   Back   " color={"red"}/>
              </SafeAreaView>
       )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:  'rgba(0, 140, 255, 0.55)',
      margin: 16,
      // marginTop:30
    },
    upperview:{
      marginTop: 24,
      flex:1,
    },
    age: {
      fontSize: 32,
      fontWeight: "bold",
      
      alignSelf:"center"
    },
    btn: {
      borderWidth: 2,
      borderRadius: 8,
      backgroundColor: "red",
      height: 40,
      width:100,
      marginBottom:16,
      alignItems:"center",
      alignSelf:"center"
    },
    btntext: {
      color: "white",
      fontWeight: "bold",
       fontSize:25,
    },
   
  
  });