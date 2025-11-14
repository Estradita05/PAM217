import { Text, StyleSheet, View, TextInput, Button, Alert} from 'react-native'
import React, {Component, useState } from 'react'; 


export default function EntradasScreen() {

  const[nombre, setNombre]= useState('');
  const [password, setPassword]= useState('');
  const [comentario, setComentario]= useState('');

  const mostrarAlerta= () => {
    if([nombre.trim(), password.trim(), comentario.trim()].includes ('')) {
     Alert.alert('Error', 'Por favor ingrese un nombre valido');
     alert ('Por favor ingrese un nombre valido');

    } else{
      Alert.alert(`¡Hola, ${nombre}!`, 'Tu nombre ha sido registrado correctamente' );
      alert (`¡Hola, ${nombre}! Tu nombre ha sido registrado correctamente. Tu comtraseña es ${password}`);
         
      setNombre('');
    }
  };


return (
  <View style={styles.container}>
    <Text style= {styles.label}>Ingrese su nombre:</Text>

    <TextInput
    style={styles.input}
    placeholder="Montse EC"
    value={nombre}
    onChangeText={setNombre}
    keyboardType='default'
    autoCapitalize='words'
    />

    <TextInput 
    style={styles.input}
    placeholder="Password"
    keyboardType="numeric" 
    secureTextEntry={true}
    />
        
    <TextInput 
    style={styles.input}
    multiline={true}
    numberOfLines={4}
    />

  <Button title="Saludar" onPress={mostrarAlerta} color= '#df2db9ff' />
   
</View>
    
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16,
  },
});