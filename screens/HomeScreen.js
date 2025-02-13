import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>CodeGlosary</Text>
      <Image 
        source={require('../assets/log.png')} // Asegúrate de tener el logo en la carpeta correcta
        style={styles.logo}
        resizeMode="contain"
      />
      <Text> </Text>
      <Button
        mode="contained" 
        onPress={() => navigation.navigate('menu')}>
        Empezar 
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4e7d1',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20, // Espacio entre el título y la imagen
  },
  logo: {
    width: 150,  // Ajusta el tamaño del logo
    height: 150,
  },
});