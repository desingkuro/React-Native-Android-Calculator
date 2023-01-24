import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {Mycolors} from "./src/styles/Colores";
import { Operaciones } from './src/componentes/Operaciones';
import { Display } from './src/componentes/ResultadoOperaciones';

export default function App() {
 

  return (
    <SafeAreaView style={styles.container}>
      <Operaciones/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    padding:16
  },
  texto:{
    color:"white",
    fontSize:30,
  }
});
