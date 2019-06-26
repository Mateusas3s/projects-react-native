import React from 'react';
import {
  Navigator
} from 'react-native-deprecated-custom-components'

import CenaPrincipal from './src/components/CenaPrincipal'
import CenaCliente from './src/components/CenaCliente'
import CenaContato from './src/components/CenaContato'
import CenaEmpresa from './src/components/CenaEmpresa'
import CenaServico from './src/components/CenaServico'


export default class App extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {

          switch(route.id){

            case 'principal':
              return(<CenaPrincipal navigator={navigator} />);

            case 'cliente':
              return(<CenaCliente navigator={navigator} />);

            case 'contato':
              return(<CenaContato navigator={navigator} />);

            case 'empresa':
              return(<CenaEmpresa navigator={navigator} />);

            case 'servico':
              return(<CenaServico navigator={navigator} />);

            default:
              return false;
          }

        }}
      />
    );
  }
}