import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const logo = require('../../assets/logo.png')
const menuCliente = require('../../assets/menu_cliente.png')
const menuContato = require('../../assets/menu_contato.png')
const menuEmpresa = require('../../assets/menu_empresa.png')
const menuServico = require('../../assets/menu_servico.png')


export default class CenaPrincipal extends React.Component {
  render() {
    return (
        <View>
        <StatusBar 
          //hidden={true}
          backgroundColor= '#ccc'
        />

        <BarraNavegacao />
        <Image source={logo} />
        <Image source={menuCliente} />
        <Image source={menuContato} />
        <Image source={menuEmpresa} />
        <Image source={menuServico} />




      </View>
    );
  }
}

const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#ccc',
        padding: 10,
        paddingTop: 30,
        height: 60
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }
});
