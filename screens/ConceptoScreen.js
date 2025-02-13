import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const ConceptoScreen = ({ navigation }) => {
  // Estado para controlar la visibilidad de cada concepto
  const [visibleVariable, setVisibleVariable] = useState(false);
  const [visibleAlgoritmo, setVisibleAlgoritmo] = useState(false);

  return (
    <View style={styles.container}>

      {/* Concepto Variable */}
      <TouchableOpacity onPress={() => setVisibleVariable(!visibleVariable)}>
        <Text style={styles.title}>
          {visibleVariable ? "▼ Variable" : "▶ Variable"}
        </Text>
      </TouchableOpacity>

      {visibleVariable && (
        <Text style={styles.definition}>
          Una variable es un espacio en memoria que almacena un valor que puede cambiar durante la ejecución del programa. Se usa para guardar y manipular datos en un programa.
        </Text>
      )}

      {/* Concepto Algoritmo */}
      <TouchableOpacity onPress={() => setVisibleAlgoritmo(!visibleAlgoritmo)}>
        <Text style={styles.title}>
          {visibleAlgoritmo ? "▼ Algoritmo" : "▶ Algoritmo"}
        </Text>
      </TouchableOpacity>

      {visibleAlgoritmo && (
        <Text style={styles.definition}>
          Un algoritmo es un conjunto de instrucciones bien definidas que describen cómo resolver un problema. Los algoritmos son la base de la programación, ya que definen el paso a paso para realizar tareas específicas.
        </Text>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007bff',
  },
  definition: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    elevation: 2,
  },
});

export default ConceptoScreen;