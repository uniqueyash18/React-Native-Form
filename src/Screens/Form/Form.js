import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style';
import { useEffect, useState } from 'react';
import TextInputcomp from '../../Component/TextInputcomp';
import Buttoncomp from '../../Component/Buttoncomp';
export default function Form() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [rollno, setRollno] = useState('')
    const [department, setDepartment] = useState('')
    const [email, setEmail] = useState()
    const [mobile, setMobile] = useState()
    function validate() {
      const  emailRegex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!name.trim()) {
            alert("Please Enter Your name")
        } else if (!age.trim()) {
            alert("Please Enter Your age")
        } else if (!rollno.trim()) {
            alert("Please Enter Your roll no")
        } else if (!department.trim()) {
            alert("Please Enter Your department")
        }else if (!email.trim()) {
            alert("Please Enter Your Email")
        }else if (!mobile.trim()) {
            alert("Please Enter Your Mobile number")
        } else {
            alert("Yeah! "+name.toUpperCase() + " You have succesfully submitted the form")
            clearState()
        }
    }
    const clearState = () => {
        setName(''), setAge(''), setRollno(''), setDepartment(''), setEmail(''), setMobile('')
    }

    return (
        <ScrollView style={styles.maindiv}>
            <Text style={styles.heading}>REGISTRATION FORM</Text>
            <View style={styles.btnarea}>
                <TextInputcomp place="Enter Your Name" style={{}} value={name} keyboard="string" onchange={(val) => {if(val.match( "^[A-Za-z_-]*$")){setName(val)}}} maxln={20}  />
                <TextInputcomp place="Enter Your age" style={{}} value={age} keyboard="numeric" onchange={(val) => {if(val.match( "^[0-9]*$")){setAge(val)}}} maxln={2}/>
                <TextInputcomp place="Enter Your Roll No" style={{}} value={rollno} keyboard="numeric" onchange={(val) => {if(val.match( "^[0-9]*$")){setRollno(val)}}} maxln={12} />
                <TextInputcomp place="Enter Your Department" style={{}} value={department} keyboard="string" onchange={(val) => setDepartment(val)}/>
                <TextInputcomp place="Enter Your Email" style={{}} value={email} keyboard="email-address" onchange={(val) => setEmail(val)} />
                <TextInputcomp place="Enter Your Mobile Number" style={{}} value={mobile} keyboard="numeric" onchange={(val) => {if(val.match( "^[0-9]*$")){setMobile(val)}}} maxln={10} />
                <Buttoncomp validate={validate} />
            </View>
        </ScrollView>
    );

}

