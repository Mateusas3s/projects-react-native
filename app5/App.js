import React from 'react';
import {  
  View,
  StatusBar
} from 'react-native';

import BarraNavegacao from './src/components/BarraNavegacao'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar 
          //hidden={true}
          backgroundColor= '#ccc'
        />

      <BarraNavegacao />

      </View>
    );
  }
}

