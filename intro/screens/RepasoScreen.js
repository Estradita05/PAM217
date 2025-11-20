import React, { useState, useEffect } from 'react';
import {View,Text,TextInput,Button,Alert,Switch,ImageBackground,Image,StyleSheet,SafeAreaView} from 'react-native';

export default function RepasoScreen() {
  
  const [showSplash, setShowSplash] = useState(true); 
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  
  useEffect(() => { 
    const timer = setTimeout(() => 
      { setShowSplash(false);

      }, 2000);
    return () => clearTimeout(timer);
    }, []);

  const mostrarAlerta = () => 
  {
    if (nombre.trim() === '') 
      {
      Alert.alert('Error', 'Debes ingresar tu nombre completo.');
       alert('Error', 'Debes ingresar tu nombre completo.');
         return;
      }

    if (correo.trim() === '') 
      {
      Alert.alert('Error', 'Debes ingresar tu correo electrónico.');
       alert('Error', 'Debes ingresar tu correo electrónico.');
         return;
      }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(correo)) 
      {
      Alert.alert('Error', 'El correo ingresado no es válido.');
       alert('Error', 'El correo ingresado no es válido.');
         return;
      }

    if (!aceptaTerminos) 
      {
      Alert.alert('Aviso', 'Debes aceptar los términos y condiciones.');
       alert('Aviso', 'Debes aceptar los términos y condiciones.');
         return;
      }

    Alert.alert('Registro exitoso',`Datos registrados correctamente: Nombre: ${nombre} Correo: ${correo}`);

    setNombre('');
    setCorreo('');
    setAceptaTerminos(false);
  };

  
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

  
  return (
   <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source=
        {{
          uri: 'https://wallpapercave.com/wp/wp3850825.jpg'
        }}
        style={styles.background}>
        
    <View style={styles.container}>
      <Image
       source=
       {{
        uri: 'https://wallpapercave.com/wp/wp3850825.jpg' 
      }}
      style={styles.logo}/>

    <Text style={styles.titulo}>Registro de Usuario</Text>

    <TextInput
      style={styles.input}
      placeholder="Nombre completo"
      value={nombre}
      onChangeText={setNombre}
    />

    <TextInput
      style={styles.input}
      placeholder="Correo electrónico"
      keyboardType="email-address"
      value={correo}
      onChangeText={setCorreo}
    />

    <View style={styles.switchContainer}>
      <Text style={styles.texto}>Aceptar términos y condiciones</Text>
         <Switch
            value={aceptaTerminos}
            onValueChange={setAceptaTerminos}
            thumbColor={aceptaTerminos ? '#FF69B4' : '#f4f3f4'}
            trackColor={{ false: '#ccc', true: '#FFB6C1' }}
         />
    </View>

    <Button title="Registrarse" color="#FF69B4" onPress={mostrarAlerta} />
       </View>
     </ImageBackground>
    </SafeAreaView>
  );
}


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
