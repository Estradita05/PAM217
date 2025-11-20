import { Text, StyleSheet, View, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import EntradasScreen from './EntradasScreen'
import ImagenScreen from './ImagenScreen'
import ScrollViewScreen from './ScrollViewScreen'
import IndicadorScreen from './IndicadorScreen'
import ListaScreen from './ListaScreen'
import ModalScreen from './ModalScreens'
import BottomScreen from './BottomScreens'
import RepasoScreen from './RepasoScreen'

export default function MenuScreen () {

    const [screen, setScreen] = useState('menu');

    switch (screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'Text Input & Alerth':
            return <EntradasScreen/>;
        case 'ImageBackground & SlapshScreen':
            return <ImagenScreen/>;
        case 'ScrollView':
            return <ScrollViewScreen/>;
        case 'ActivityIndicator':
            return <IndicadorScreen/>;
        case 'FlatList y Section List':
            return <ListaScreen/>;
        case 'Modal':
            return <ModalScreen/>;
        case 'Bottom Sheet':
            return <BottomScreen/>;
        case 'Repaso 1':
            return <RepasoScreen/>;
            case 'menu':
        default:
            return (
               <View style={styles.container}>
                 <Text style={styles.titulo}>Menu Prácticas</Text>

                 <View style={styles.contenedorBotones}>
                   <Button color="#FF69B4" title="Pract:Contador" onPress={() => setScreen('contador')}/>
                   <Button color="#FF69B4" title="Pract:Botones"  onPress={() => setScreen('botones')}/>
                   <Button color='#FF69B4' title="Pract:Text Input & Alerth" onPress={()=> setScreen('Text Input & Alerth')}/>
                   <Button color='#FF69B4' title="Pract: ImageBackground & SlapshScreen" onPress={()=> setScreen('ImageBackground & SlapshScreen')}/>
                   <Button color='#FF69B4' title="Pract: ScrollView" onPress={()=> setScreen('ScrollView')}/>
                   <Button color='#FF69B4' title="Pract: ActivityIndicator" onPress={()=> setScreen('ActivityIndicator')}/>
                   <Button color='#FF69B4' title="Pract: FlatList y Section List" onPress={()=> setScreen('FlatList y Section List')}/>
                   <Button color='#FF69B4' title="Pract: Modal " onPress={()=> setScreen('Modal')}/>
                   <Button color='#FF69B4' title="Pract: Bottom Sheet" onPress={()=> setScreen('Bottom Sheet')}/>
                   <Button color='#FF69B4' title="Pract: Repaso 1" onPress={()=> setScreen('Repaso 1')}/>
                
                 </View>
               </View>
            )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C400C4',
  },
  titulo: {
    color: 'BLACK',
    fontSize: 50,
    fontFamily: 'Time New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  contenedorBotones: {
    flexDirection: 'column',
    gap: 15,
    marginTop: 10,
    alignItems: 'center',
  }
});
