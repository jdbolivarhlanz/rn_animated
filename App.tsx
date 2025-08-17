import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Animacion1 from './components/Animacion1';

export default function App() {
  return (
    <View style={styles.contenido}>
      <Text>Animaciones</Text>
      <Animacion1/>
    </View>
  );
}

const styles = StyleSheet.create({
  contenido: {
    marginTop:100
  },
});
