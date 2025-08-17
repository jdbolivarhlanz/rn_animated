import { StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'

export default function Animacion1() {
  return (
    <View>
      <Text style={styles.texto}>Animacion1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    texto:{
        fontSize:30,
        textAlign:'center'
    }
})