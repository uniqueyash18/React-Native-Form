import { FlatList,TouchableOpacity,Image , View, Text } from "react-native";
import { useSelector } from "react-redux";
import StringConstants from "../../Constants/StringConstants";
import { deleteaction } from "../../redux/actions/sendaction";
import { styles } from "./HomeStyles";
export default () => {
  const mydata = useSelector((state) =>state.users.value )
  return (
    <View style={styles.container}>
    <Text>{StringConstants.User_Details}</Text>
    <FlatList
        data={mydata}
        renderItem={({item,index}) =>
        <View style={styles.card}>
       <Text style={styles.text}>{StringConstants.Name}{item.Name}</Text>
       <Text style={styles.text}>{StringConstants.Age}{item.Age}</Text>
       <Text style={styles.text}>{StringConstants.Email}{item.Email}</Text>
       <Text style={styles.text}>{StringConstants.Mobile}{item.Mobile}</Text>
       <TouchableOpacity onPress={()=>{deleteaction(index)}}>
        <Image  source={{uri:'https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/cross-icon.png'}} style={styles.img} />
       </TouchableOpacity>
       </View> }
    />
    </View>
  );
};
