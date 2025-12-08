import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Switch,
  ImageBackground,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';

export default function RepasoScreen() {

  // Estado para mostrar la pantalla splash por 2 segundos
  const [showSplash, setShowSplash] = useState(true);

  // Estados para el formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  // Efecto para ocultar el splash después de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, []);

  // Función para validar los campos y mostrar alertas
  const mostrarAlerta = () => {

    // Validar nombre vacío
    if (nombre.trim() === '') {
      Alert.alert('Error', 'Debes ingresar tu nombre completo.');
      alert('Error', 'Debes ingresar tu nombre completo.');
      return;
    }

    // Validar correo vacío
    if (correo.trim() === '') {
      Alert.alert('Error', 'Debes ingresar tu correo electrónico.');
      alert('Error', 'Debes ingresar tu correo electrónico.');
      return;
    }

    // Validar formato de correo
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(correo)) {
      Alert.alert('Error', 'El correo ingresado no es válido.');
      alert('Error', 'El correo ingresado no es válido.');
      return;
    }

    // Validar términos y condiciones
    if (!aceptaTerminos) {
      Alert.alert('Aviso', 'Debes aceptar los términos y condiciones.');
      alert('Aviso', 'Debes aceptar los términos y condiciones.');
      return;
    }

    // Si todo es válido, mostrar éxito
    Alert.alert(
      'Registro exitoso',
      `Datos registrados correctamente: Nombre: ${nombre} Correo: ${correo}`
    );

    // Limpiar formulario después de registrar
    setNombre('');
    setCorreo('');
    setAceptaTerminos(false);
  };

  // --- PANTALLA DE CARGA (SPLASH) ---
  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={{
            uri: 'https://wallpapercave.com/wp/wp3850825.jpg'
          }}
          style={styles.splashLogo}
        />

        <Text style={styles.splashText}>Bienvenido </Text>
      </View>
    );
  }

  // --- PANTALLA PRINCIPAL ---
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: 'https://wallpapercave.com/wp/wp3850825.jpg'
        }}
        style={styles.background}
      >
        <View style={styles.container}>

          {/* Imagen de avatar */}
          <Image
            source={{
              uri: 'https://wallpapercave.com/wp/wp3850825.jpg'
            }}
            style={styles.logo}
          />

          <Text style={styles.titulo}>Registro de Usuario</Text>

          {/* Input nombre */}
          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            value={nombre}
            onChangeText={setNombre}
          />

          {/* Input correo */}
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            value={correo}
            onChangeText={setCorreo}
          />

          {/* Switch términos */}
          <View style={styles.switchContainer}>
            <Text style={styles.texto}>Aceptar términos y condiciones</Text>

            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
              thumbColor={aceptaTerminos ? '#FF69B4' : '#f4f3f4'}
              trackColor={{ false: '#ccc', true: '#FFB6C1' }}
            />
          </View>

          {/* Botón registrar */}
          <Button
            title="Registrarse"
            color="#FF69B4"
            onPress={mostrarAlerta}
          />

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}


// -------------------- ESTILOS --------------------
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#ffe4ec',
    justifyContent: 'center',
    alignItems: 'center'
  },
  splashLogo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20
  },
  splashText: {
    fontSize: 22,
    color: '#FF69B4',
    fontWeight: 'bold'
  },

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 15,
    padding: 25,
    width: '85%',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 20
  },
  input: {
    width: '90%',
    backgroundColor: 'white',
    borderColor: '#FFB6C1',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 8
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    gap: 10
  },
  texto: {
    fontSize: 14
  }
});
