import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>¿A dónde quieres navegar?</Text>
      
      <View style={styles.btns}> 
        <Button  
          mode="contained" 
          onPress={() => navigation.navigate('cuestionario')}>
          Conceptos 💡
        </Button>
        
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('examen')}>
          Examen 📝
        </Button>
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99e8f2',
    padding: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  btns: {
    flexDirection: 'row', // Acomoda los botones en línea
    justifyContent: 'space-around',
    width: '100%' // Asegura que los botones se distribuyan bien
  }
});