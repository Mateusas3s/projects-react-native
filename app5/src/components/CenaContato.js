import React from 'react';
import { 
    StyleSheet,
    View,
    StatusBar,
    Text,
    Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheContato = require('../../assets/detalhe_contato.png')

export default class CenaContato extends React.Component {
  render() {
    return (
      <View>
        <StatusBar 
          //hidden={true}
          backgroundColor= '#ccc'
        />

        <BarraNavegacao voltar navigator={this.props.navigator}/>
       
        <View style={styles.cabecalho}>
          <Image source={detalheContato} />
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>

        <View style={styles.detalheContato}>
          <Text style={styles.txtDetalheContato}>Tel: (11) 3765-5678</Text>
          <Text style={styles.txtDetalheContato}>Cel: (11) 9 8765-5678</Text>
          <Text style={styles.txtDetalheContato}>Email: contato@contatomail.com</Text>
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
      color: '#61bd8c',
      marginLeft: 10,
      marginTop: 20
    },
    detalheContato: {
      padding: 20,
      marginTop: 20
    },
    txtDetalheContato: {
      fontSize: 18,
      color: '#222222',
      marginLeft: 10,
      marginTop: 20
    }
});
