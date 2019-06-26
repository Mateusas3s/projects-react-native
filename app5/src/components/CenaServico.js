import React from 'react';
import { 
    StyleSheet,
    View,
    StatusBar,
    Text,
    Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheServico = require('../../assets/detalhe_servico.png')

export default class CenaServico extends React.Component {
  render() {
    return (
      <View>
        <StatusBar 
          //hidden={true}
          backgroundColor= '#ccc'
        />

        <BarraNavegacao voltar navigator={this.props.navigator}/>
       
        <View style={styles.cabecalho}>
          <Image source={detalheServico} />
          <Text style={styles.txtTitulo}>Nossos Serviços</Text>
        </View>

        <View style={styles.detalheEmpresa}>
            <Text style={styles.txtDetalheCliente}>- Lorem Ipsum is simply dummy text of the printing </Text>
            <Text style={styles.txtDetalheCliente}>- Lorem Ipsum is simply dummy text of the printing </Text>
            <Text style={styles.txtDetalheCliente}>- Lorem Ipsum is simply dummy text of the printing </Text> 
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
      color: '#19d1c8',
      marginLeft: 10,
      marginTop: 20
    },
    detalheCliente: {
      padding: 20,
      marginTop: 20
    },
    txtDetalheCliente: {
      fontSize: 20,
      color: '#222222',
      marginLeft: 10,
      marginTop: 20
    }
});
