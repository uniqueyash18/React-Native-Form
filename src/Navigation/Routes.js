import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "../Screens/Form/Form";
import Home from "../Screens/Home/Home";
import { Login } from "../Screens/Login/Login";
import { Welcome } from "../Screens/Welcome/Welcome";
export const Routes=()=>{
  const Stack = createNativeStackNavigator()
  return(
<NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen   name="Welcome" component={Welcome}  />
        <Stack.Screen  options={{animation:'slide_from_right'}} name="Form" component={Form} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name="Home" component={Home} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
)
}