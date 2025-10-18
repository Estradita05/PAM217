import { Text, StyleSheet, View, Pressable, Touchable, TouchableOpacity, TouchableWithoutFeedback, Switch } from 'react-native'
import { useState } from 'react';

export default function BotonesScreen() {
  const [accion , setAccion] = useState( 'nada');
  const [isDisabled, setIsDisabled] = useState(false);

    return (
      <View style={styles.container}>
       <Text>
            Activado:
       </Text>
       <Switch
       onValueChange={()=> setIsDisabled(!isDisabled)}
       value={isDisabled}
       />
       <Text>
        { accion}
        </Text>

      

      <Pressable
        onPressIn={()=> setAccion('Pressable In')}
        onPressOut={()=> setAccion('Pressable Out')}
        onPressPress={()=> setAccion('Pressable Long')}
       disabled={!isDisabled}       >
          {({pressed}) => (
            <View style={[styles.card, !pressed && styles.shadow]}>
            <View style={styles.mockImage}/>
        <text>
         {pressed ? 'tarjeta presionada' : 'tarjeta no presionada'}
        </text>
       
        </View>

          )}
        
      </Pressable>
      <TouchableOpacity
        activeOpacity={0.2}
        onPress={()=> setAccion('Opacity')}
        disabled={!isDisabled} 
      >
      <View style={[styles.card, styles.shadow]}>
        <View style={styles.mockImage}/>
        <Text>
          Esta es una tarjeta.
        </Text>
      </View>

      </TouchableOpacity>
      <TouchableWithoutFeedback
      disabled={!isDisabled} 
      onPress={()=> setAccion('Without Feedback')}
      
      >
        <View style={[styles.card, styles.shadow]}>
        <View style={styles.mockImage}/>
        <Text>
          Esta es una tarjeta.
        </Text>

        </View>

      </TouchableWithoutFeedback>
      </View>
    );
  
}

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 200,
        height: 250,
        padding: 20,
        display: "flex",
        flexDirection: 'column',
        borderRadius: 8,
        margin: 15
    },
    mockImage: {
        flex: 1,
        backgroundColor: 'gray',
        marginBottom: 8,
        borderRadius: 8
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 10,
    },
});