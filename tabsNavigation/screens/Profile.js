import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de usuario</Text>

      
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Detalle')} 
      >
        <Text style={styles.buttonText}>Detalles de Usuario</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green', 
  },
  button: {
    backgroundColor: '#007BFF', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});