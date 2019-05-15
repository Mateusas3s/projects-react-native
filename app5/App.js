import React from 'react';
import {  
  View,
} from 'react-native';

import CenaCliente from './src/components/CenaCliente'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <CenaCliente />

      </View>
    );
  }
}

