import { TouchableOpacity, Text, StyleSheet } from "react-native";
const Buttoncomp = ({ validate }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={validate}>
            <Text style={styles.btntxt}>Submit</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn: { borderRadius: 8, marginTop: 16, marginBottom: 16, height: 40, borderWidth: 2, width: 80, alignItems: "center", justifyContent: "center", backgroundColor: "black", 
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
},

    btntxt: {
        color: "white",
        fontSize: 20
    }
})
export default Buttoncomp