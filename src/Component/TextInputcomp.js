import { TextInput, StyleSheet } from "react-native";
export default ({ place, style, value, keyboard,onchange,maxln }) => {
    return (
        <TextInput keyboardType={keyboard} placeholder={place} style={{ ...styles.tinput, ...style }} value={value} onChangeText={onchange} maxLength={maxln}></TextInput>
    )
}
const styles = StyleSheet.create({
    tinput: {
        borderRadius: 8,
        borderWidth: 2,
        width: 250,
        marginTop: 16,
        height: 40,
        backgroundColor: "white",
        padding: 10,
        // textAlign:'center',
        // fontWeight:'bold'
    }
})
