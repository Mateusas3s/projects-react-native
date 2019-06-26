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
        
        <View style={styles.logo}>
          <Image source={logo} />
        </View>
       
        <View style={styles.menu}>
          <View style={styles.menuGroup}>
            <Image style={styles.imgMenu} source={menuCliente} />
            <Image style={styles.imgMenu} source={menuContato} />
          </View>

          <View style={styles.menuGroup}>
            <Image  style={styles.imgMenu} source={menuEmpresa} />
            <Image style={styles.imgMenu} source={menuServico} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    logo: {
      marginTop: 30,
      alignItems: 'center'
    },
    menu: {
      alignItems: 'center'
    },
    menuGroup: {
      flexDirection: 'row'
    },
    imgMenu: {
      margin: 15
    }
});