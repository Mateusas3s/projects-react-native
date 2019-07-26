import React from 'react';
import { 
    StyleSheet,
    View,
    StatusBar,
    Text,
    Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const detalheEmpresa = require('../../assets/detalhe_empresa.png')

export default class CenaEmpresa extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar 
          //hidden={true}
          backgroundColor= '#ec7148'
        />

        <BarraNavegacao voltar navigator={this.props.navigator}/>
       
        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitulo}>Nossa Empresa</Text>
        </View>

        <View style={styles.detalheEmpresa}>
          <Text style={styles.txtDetalheCliente}>
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since 
            the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was 
            popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.</Text>
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
      color: '#ec7148',
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
