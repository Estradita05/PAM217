import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native-web';


export default function App() {
  
  const [showSplash, setShowSplash] = useState(true);
  const  []

  useEffect(()) => {
    const timer = setTimeout(() => {
  },4000);
  return () => clearTimeout(timer);
}, []);

if (showSplash) {
  return (
    <View style={styles.container}>
      <image
      source={{

      }}
       styles={styles.splashText}>America Montserrath Estrada Carranza 
       Tecnica en Desarrollo de Software 
       Soy estudiante de Ingeneria en Tecnologias de la Información e Inovación digital, 
       llevo 1 añp 3 meses cursando la materia y mi rama es el desarrollo de software,
       manejo lenguajes de programación como java, javascript,C++, Python,etc..
       Correo: 124050385@upq.edu.mx
       Tel:4425855789</Text>
       </View>
       

    






  



  

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
