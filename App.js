import { styles } from './src/Screens/Form/style';
import { View} from 'react-native';
import { Routes } from './src/Navigation/Routes';
export default function App() {
       return (
              <View style={styles.maindiv}>
                    {/* <Form/> */}
                    <Routes/>
                    {/* <Welcome/> */}
              </View>
       );}
