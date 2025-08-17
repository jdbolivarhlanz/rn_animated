import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Animacion1() {

  const [animacion] = useState( new Animated.Value(0))

    useEffect( iniciarAnimacion, [])

    function iniciarAnimacion() {
        Animated.timing(
            animacion, 
            {
                useNativeDriver:true,
                toValue:1,  // valor al que llega
                duration: 1500   // tiempo que emplea
            }
        ).start()
    }


    const estiloView =  {
        opacity: animacion
    }

  return (
    <Animated.View style={estiloView}>
      <Text style={styles.texto}>Animacion1</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    texto:{
        fontSize:30,
        textAlign:'center'
    }
})