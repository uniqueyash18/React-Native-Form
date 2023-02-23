import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "../Screens/Form/Form";
import { Login } from "../Screens/Login/Login";
import { Welcome } from "../Screens/Welcome/Welcome";
export const Routes=()=>{
  const Stack = createNativeStackNavigator()
  return(
<NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false, headerBackButtonMenuEnabled:true}}>
        <Stack.Screen  options={{animation:'slide_from_right'}} name="Welcome" component={Welcome}  />
        <Stack.Screen  options={{animation:'slide_from_right'}} name="Form" component={Form} />
        <Stack.Screen  options={{animation:'slide_from_right'}} name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
)
}