import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, SafeAreaView } from 'react-native';

export default function ImagenScreen() {
  
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); 
    }, 1000);
    return () => clearTimeout(timer); 
  }, []);

  
  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido a la App</Text>
      </View>
    );
  }

  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: 'https://wallpapercave.com/wp/wp3850825.jpg',
        }} 
        style={styles.background} 
      >
        
        <View style={styles.overlay}>
          
            <Text style={styles.title}>Bienvenido!</Text>
        </View>
       </ImageBackground>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  
  splashContainer: {
    flex: 1, 
    backgroundColor: '#c91994ff', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  splashText: {
    fontSize: 24, 
    color: '#000000ff', 
  },

  background: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 20, 
    borderRadius: 10, 
  },

  title: {
    fontSize: 28, 
    color: '#ffffffff', 
    marginBottom: 10, 
    textAlign: 'center', 
  },
});