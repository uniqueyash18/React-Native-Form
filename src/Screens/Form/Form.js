import { Text, View, ScrollView, Button, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import TextInputcomp from "../../Component/TextInputcomp";
import Buttoncomp from "../../Component/Buttoncomp";
import StringConstants from "../../Constants/StringConstants";
import { sendaction } from "../../redux/actions/sendaction";

export default function Form({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  function validate() {
    const udata = {
      Name: name,
      Age: age,
      Email: email,
      Mobile: mobile,
    };
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!name.trim()) {
      alert("Please Enter Your name");
    } else if (!age.trim()) {
      alert("Please Enter Your age");
    } else if (!email.trim()) {
      alert("Please Enter Your Email");
    } else if (!email.match(emailRegex)) {
      alert("Please Enter Your Email properly");
    } else if (!mobile.trim()) {
      alert("Please Enter Your Mobile number");
    } else {
     sendaction(udata)
      navigation.navigate("Home");
    }
  }

  return (
    <ScrollView style={styles.maindiv}>
      <Text style={styles.heading}>{StringConstants.REGISTRATION_FORM}</Text>
      <View style={styles.logintxt}>
        <Text style={{ color: "red" }}>
          {StringConstants.Already_have_an_account}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>{StringConstants.Login}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnarea}>
        <TextInputcomp
          place={StringConstants.Enter_Your_Name}
          style={{}}
          value={name}
          keyboard="string"
          onchange={(val) => {
            if (val.match("^[A-Za-z_-]*$")) {
              setName(val);
            }
          }}
          maxln={20}
        />
        <TextInputcomp
          place={StringConstants.Enter_Your_age}
          style={{}}
          value={age}
          keyboard="numeric"
          onchange={(val) => {
            if (val.match("^[0-9]*$")) {
              setAge(val);
            }
          }}
          maxln={2}
        />
        <TextInputcomp
          place={StringConstants.Enter_Your_Email}
          style={{}}
          value={email}
          keyboard="email-address"
          onchange={(val) => setEmail(val)}
        />
        <TextInputcomp
          place={StringConstants.Enter_Your_Mobile_Number}
          style={{}}
          value={mobile}
          keyboard="numeric"
          onchange={(val) => {
            if (val.match("^[0-9]*$")) {
              setMobile(val);
            }
          }}
          maxln={10}
        />
        <Buttoncomp validate={validate} />
        <Button
          onPress={() => navigation.goBack()}
          title={StringConstants.Back}
          color={"red"}
        />
      </View>
    </ScrollView>
  );
}
