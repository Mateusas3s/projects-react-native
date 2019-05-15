import React from 'react';
import {  
  View,
  Navigator
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal'
import CenaCliente from './src/components/CenaCliente'

export default class App extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'a' }}
        renderScene={(route, navigator) => {
          if(route.id === 'a'){
            return(<CenaPrincipal />);
          }

          if(route.id === 'b'){
            return(<CenaCliente />)
          }
        }}
      />
    );
  }
}