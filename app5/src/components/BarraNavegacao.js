import React from 'react';
import { 
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class BarraNavegacao extends React.Component {
  render() {
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.titulo}>ATM Consultoria!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#ccc',
        paddingTop: 40,
        height: 100
    },
    titulo: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        color: '#000'
    }
});
