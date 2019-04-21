import React from 'react';
import { View } from 'react-native';
import Itens from './Itens';

export default class ListaItens extends React.Component {
  
  render() {
    return (
      <View>
        <Itens/>
        <Itens/>
        <Itens/>
      </View>
    );
  }
}
