import React from 'react';
import {
  Navigator
} from 'react-native-deprecated-custom-components'

import CenaPrincipal from './src/components/CenaPrincipal'
import CenaCliente from './src/components/CenaCliente'

export default class App extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {
          if(route.id === 'principal'){
            return(<CenaPrincipal navigator={navigator} />);
          }

          if(route.id === 'cliente'){
            return(<CenaCliente navigator={navigator} />);
          }
        }}
      />
    );
  }
}