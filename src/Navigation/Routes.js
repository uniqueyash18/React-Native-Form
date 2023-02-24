import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "../Screens/Form/Form";
import { Login } from "../Screens/Login/Login";
import { Welcome } from "../Screens/Welcome/Welcome";
import { Test1 } from "../Screens/AgeTest/Test1";
export const Routes=()=>{
  const Stack = createNativeStackNavigator()
  return(
<NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false, headerTitle:"Codebrew" }}>
        <Stack.Screen   name="Welcome" component={Welcome}  />
        <Stack.Screen  options={{animation:'slide_from_right'}} name="Form" component={Form} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name="Login" component={Login} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name="Test1" component={Test1} />
      </Stack.Navigator>
    </NavigationContainer>
)
}