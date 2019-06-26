import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

const btnVoltar = require('../../assets/btn_voltar.png')

export default class BarraNavegacao extends React.Component {
  render() {

    if(this.props.voltar){
      return(
        <View style={styles.barraTitulo}>
          <TouchableHighlight 
            onPress={ () => {
              this.props.navigator.pop();
            }}>
            <Image source={btnVoltar} />
          </TouchableHighlight>
          <Text style={styles.titulo}>ATM Consultoria!</Text>
        </View>
      );
    }
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
        height: 100,
        flexDirection: 'row'
    },
    titulo: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        color: '#000'
    }
});
