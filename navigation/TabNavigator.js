import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen 
          name="home" 
          component = { HomeScreen } 
          options={
            { 
              headerShown: false,
              title: 'Inicio',
              tabBarIcon: () => (<FontAwesome5 name="home" size={24} color="#f2c599" />)
            }
          }
        />
        <Tab.Screen
          name="menu"
          component = { MenuScreen }
          options={
            {
              headerShown: false,
              title: 'Menú',
              tabBarIcon: () => (<FontAwesome5 name="menu" size={24} color="#f2c599" />)
            }
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;