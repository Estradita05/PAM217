import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
  Alert,
  SafeAreaView,
  Animated,
  Easing,
} from "react-native";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Animated.Text style={[styles.splashText, { opacity: fadeAnim }]}>
        Montse
        </Animated.Text>
        <Text style={styles.splashSubtitle}>Programadora</Text>
      </View>
    );
  }

  const handleEditProfile = () => {
    Alert.alert(
      "Editar Perfil",
      "¿Deseas guardar los cambios?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Guardar", onPress: () => Alert.alert("Perfil guardado ") },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/originals/15/1b/8b/151b8b0ff73d31d18f7181f8e15d52b9.jpg",
        }}
        style={styles.background}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.overlay}>
            <Text style={styles.name}>Montse</Text>
            <Text style={styles.title}>Ingeniera en Software</Text>
            <Text style={styles.bio}>
            Me gusta programar, soy ingeniera en sistemas
            </Text>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Correo:</Text>
              <Text style={styles.infoText}>124050385</Text>
              <Text style={styles.infoLabel}>Teléfono:</Text>
              <Text style={styles.infoText}>4425855780</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Editar Perfil" onPress={handleEditProfile} color="#E91E63" />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#E91E63",
    justifyContent: "center",
    alignItems: "center",
  },
  splashText: {
    fontSize: 36,
    color: "white",
    fontWeight: "bold",
  },
  splashSubtitle: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
  },
  name: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: "#FF4081",
    marginBottom: 20,
  },
  bio: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 20,
  },
  infoBox: {
    alignSelf: "stretch",
    marginBottom: 20,
  },
  infoLabel: {
    color: "#FF80AB",
    fontWeight: "bold",
    fontSize: 16,
  },
  infoText: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "60%",
    marginTop: 10,
  },
});