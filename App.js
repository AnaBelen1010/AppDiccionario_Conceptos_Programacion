import StackNavigator from './navigation/StackNavigator';
import TabNavigator from './navigation/TabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native';

const App = () => {
  //return <TabNavigator />;
  return <DrawerNavigator />;
};

export default App;
