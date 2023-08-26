import { TextInput, StyleSheet } from "react-native";
export default ({ place, style, value, keyboard,onchange,maxln,texttype }) => {
    return (
        <TextInput keyboardType={keyboard} placeholder={place} style={{ ...styles.tinput, ...style }} value={value} secureTextEntry={texttype} onChangeText={onchange} maxLength={maxln}></TextInput>
    )
}
const styles = StyleSheet.create({
    tinput: {
        borderRadius: 8,
        borderWidth: 2,
        width: 270,
        marginTop: 16,
        height: 60,
        backgroundColor: "white",
        padding: 10,
        // textAlign:'center',
        // fontWeight:'bold'
    }
})
