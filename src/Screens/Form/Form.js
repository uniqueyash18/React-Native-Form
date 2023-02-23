import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style';
import { useEffect, useState } from 'react';
import TextInputcomp from '../../Component/TextInputcomp';
import Buttoncomp from '../../Component/Buttoncomp';
export default function Form() {
    const [name, newname] = useState("")
    const [age, newage] = useState("")
    const [rollno, newrollno] = useState("")
    const [department, newdepartment] = useState("")
    const [email, newemail] = useState("")
    const [mobile, newmobile] = useState("")
    function validate() {
        if (!name.trim()) {
            alert("Please Enter Your name")
        } else if (!age.trim()) {
            alert("Please Enter Your age")
        } else if (!rollno.trim()) {
            alert("Please Enter Your roll no")
        } else if (!department.trim()) {
            alert("Please Enter Your department")
        } else {
            alert("Yeah! "+name.toUpperCase() + " You have succesfully submitted the form")
            clearState()
        }
    }
    const clearState = () => {
        newname(''), newage(''), newrollno(''), newdepartment(''), newemail(''), newmobile('')
    }
    return (
        <ScrollView style={styles.maindiv}>
            <Text style={styles.heading}>REGISTRATION FORM</Text>
            <View style={styles.btnarea}>
                <TextInputcomp place="Enter Your Name" style={{}} value={name} keyboard="string" onchange={(val) => newname(val)} maxln={20}  />
                <TextInputcomp place="Enter Your age" style={{}} value={age} keyboard="numeric" onchange={(val) => newage(val)} maxln={3}/>
                <TextInputcomp place="Enter Your Roll No" style={{}} value={rollno} keyboard="numeric" onchange={(val) => newrollno(val)} maxln={12} />
                <TextInputcomp place="Enter Your Department" style={{}} value={department} keyboard="string" onchange={(val) => newdepartment(val)}/>
                <TextInputcomp place="Enter Your Email" style={{}} value={email} keyboard="email-address" onchange={(val) => newemail(val)} />
                <TextInputcomp place="Enter Your Mobile Number" style={{}} value={mobile} keyboard="numeric" onchange={(val) => newmobile(val)} maxln={10} />
                <Buttoncomp validate={validate} />
            </View>
        </ScrollView>
    );

}

