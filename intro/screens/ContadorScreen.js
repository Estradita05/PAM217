//1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

//2.Main: Zona de componentes 
export default function contadorScreen() {
  const[contador, setContador]=useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador: </Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color="#FF69B4" title="Agregar" onPress={() => setContador(contador + 1)}/>
      <Button color="#FFB6C1" title="Quitar" onPress={() => setContador(contador - 1)}/>
      <Button color="pink" title="Reiniciar" onPress={() => setContador(contador - contador)}/>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

// 3. Estilos: Zona estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb0b82a9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto : {
    color: '#6f264bff',
    fontSize: 30,
    fontFamily: 'Time New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },

  texto2:{
    color: '#8d185eff',
    fontSize: 40,
    fontFamily: 'Courier',
    fontWeight: '900',
    textDecorationLine: 'underline',
  },

  contenedorBotones:{
    marginTop: 15,
    flexDirection: 'row',
    gap:15,
  },


});