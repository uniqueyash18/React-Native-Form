import { View, Text, Button, Image } from "react-native";
import StringConstants from "../../Constants/StringConstants";

import { styles } from "./welcomeStyle";

export const Welcome = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.upper}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/sskz6uxo2nnrg8dxxwhc",
          }}
          style={styles.img}
        ></Image>
        <Text style={styles.heading}>{StringConstants.Get_An_Exclusively_Brewed_Digital_Solution_For_Your_Business} </Text>
        <View style={styles.images}>
          <Image
            source={{
              uri: "https://scontent.fluh1-1.fna.fbcdn.net/v/t39.30808-6/324578865_475721478083995_8110552031957961920_n.png?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=IcNXTATrNIUAX-sqdvq&_nc_ht=scontent.fluh1-1.fna&oh=00_AfAiwtTEKRVi-AaKpWOswMHo7P7rXHhTLTdewE174BqEhw&oe=63FF6ED8",
            }}
            style={styles.banner}
          ></Image>
          <Image
            source={{
              uri: "https://scontent.fluh1-1.fna.fbcdn.net/v/t39.30808-6/329154730_1331884670939879_3992183666189080653_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FcvFNlh0CRkAX8fhlce&_nc_ht=scontent.fluh1-1.fna&oh=00_AfCs4R87ViQ2Bmj1LB8TzPYKQejTdtXQxI4b4bH1QCTrGw&oe=640159E4",
            }}
            style={styles.banner}
          ></Image>
        </View>
        <View style={styles.images}>
          <Image
            source={{
              uri: "https://scontent.fluh1-1.fna.fbcdn.net/v/t39.30808-6/331646125_583046467037827_3877582322706400197_n.png?stp=dst-png_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=GlLhvHrI7BoAX9XJMA2&_nc_ht=scontent.fluh1-1.fna&oh=00_AfCgVu-ZbbfoZqoPJWgb7w_brvZW5-6XsJ0o1f5MuwMZ9A&oe=6400D92C",
            }}
            style={styles.banner}
          ></Image>
          <Image
            source={{
              uri: "https://scontent.fluh1-2.fna.fbcdn.net/v/t39.30808-6/324236095_703224741180100_3673941800301311522_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=tmff8Cg8dGkAX-G9bMw&_nc_oc=AQnwOb1IFeNNgMwkdqHCLQbvwcwhf6M-5Q88F7NaN92izzyqgeUaHxKsrMByk3jOPH8&_nc_ht=scontent.fluh1-2.fna&oh=00_AfBxo62d0MBdyOJ0FQ93ISsjW-WD2dF9q1yL9iuypLjL6w&oe=63FFBB4D",
            }}
            style={styles.banner}
          ></Image>
        </View>
        
      </View>
      <View>
        <Text style={styles.lowertext}>{StringConstants.New_User}</Text>
        <Button
          onPress={() => navigation.navigate("Form")}
          color="red"
          title="Signup"
        ></Button>
      </View>
      <View>
        <Text  style={styles.lowertext}>{StringConstants.Already_have_an_account} </Text>
        <Button
          onPress={() => navigation.navigate("Login")}
          color="green"
          title="Login"
        ></Button>
      </View>
    </View>
  );
};
