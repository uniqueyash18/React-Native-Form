import { View,Text,Button,Image} from "react-native"
import { styles } from "./welcomeStyle"

export const Welcome=({navigation})=>{
    return(
        <View style={styles.main}>
        <View style={styles.upper}>
        <Image source={{uri:"https://nanaimohospitalfoundation.com/wp-content/uploads/2020/12/CODE-BREW-logo-WHITE-transparent.png"}} style={styles.img}></Image>
        <Text style={styles.text}>Hey!!! CodeBrew Welcomes You, Lets Build The Future</Text>
        </View>
        <View style={styles.lower}>
        <Button onPress={() => navigation.navigate('Form')} color="red" title='Signup'></Button>
        <Button onPress={() => navigation.navigate('Login')} color="green" title='Login'></Button>
        </View>
        </View>
    )
}