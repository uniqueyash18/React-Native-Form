import { styles } from './src/Screens/Form/style';
import { ScrollView ,View} from 'react-native';
import Form from './src/Screens/Form/Form';
import { Routes } from './src/Navigation/Routes';
import { Welcome } from './src/Screens/Welcome/Welcome';

export default function App() {
       return (
              <View style={styles.maindiv}>
                    {/* <Form/> */}
                    <Routes/>
                    {/* <Welcome/> */}
              </View>
       );}
