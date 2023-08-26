import { styles } from "./src/Screens/Form/style";
import { View } from "react-native";
import { Routes } from "./src/Navigation/Routes";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <View style={styles.maindiv}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </View>
  );
}
