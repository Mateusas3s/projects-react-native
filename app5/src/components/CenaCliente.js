import React from 'react';
import { 
    StyleSheet,
    View,
    StatusBar,
    Text,
    Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheCliente = require('../../assets/detalhe_cliente.png')
const cliente1 = require('../../assets/cliente1.png')
const cliente2 = require('../../assets/cliente2.png')

export default class CenaCliente extends React.Component {
  render() {
    return (
      <View style={{ borderWidth: 1, borderColor: 'red' }}>
        <StatusBar 
          //hidden={true}
          backgroundColor= '#ccc'
        />

        <BarraNavegacao voltar navigator={this.props.navigator}/>
       
        <View style={styles.cabecalho}>
          <Image source={detalheCliente} />
          <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={cliente1} />
          <Text style={styles.txtDetalheCliente}>Joseval</Text>
        </View>
        
        <View style={styles.detalheCliente}>
          <Image source={cliente2} />
          <Text style={styles.txtDetalheCliente}>Anaina</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    cabecalho: {
      flexDirection: 'row',
      marginTop: 20
    },
    txtTitulo: {
      fontSize: 30,
      color: '#b9c941',
      marginLeft: 10,
      marginTop: 20
    },
    detalheCliente: {
      padding: 20,
      marginTop: 10
    },
    txtDetalheCliente: {
      fontSize: 20,
      color: '#222222',
      marginLeft: 10,
      marginTop: 20
    }
});
