import React from 'react';
import { View } from 'react-native';
import Itens from './Itens';
import axios from 'axios';

export default class ListaItens extends React.Component {

  componentWillMount(){
    //request Http
    axios.get('faus.com.br/recursos/c/dmairr/api/Itens.html')
      .then(response => {console.log(response);})
      .catch(() => {console.log('Erro ao recuperar os dados!')});
  }
  
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
