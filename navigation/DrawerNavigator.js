import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import ConceptoScreen from '../screens/ConceptoScreen';
import ExamenScreen from '../screens/ExamenScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name = "home" 
          component = { HomeScreen } 
          options = {{ title: 'Inicio' }}
        />
        <Drawer.Screen 
          name = "menu" 
          component = { MenuScreen } 
          options = {{ title: 'Menu' }}
        />
        <Drawer.Screen 
          name = "cuestionario"
          component = { ConceptoScreen }
          options = {{ title: 'Conceptos' }}
        />
        <Drawer.Screen
          name = "examen"
          component = { ExamenScreen }
          options = {{ title: 'Examen' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};

export default DrawerNavigator;