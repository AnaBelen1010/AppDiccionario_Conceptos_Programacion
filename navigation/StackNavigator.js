import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component = { HomeScreen } />
        <Stack.Screen name="menu" component = { MenuScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator