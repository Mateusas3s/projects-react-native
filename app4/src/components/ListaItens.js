import React from 'react';
import { ScrollView } from 'react-native';
import Itens from './Itens';
import axios from 'axios';

export default class ListaItens extends React.Component {

  constructor(props){
    super(props);

    this.state = { listaItens: [] };
  }

  componentWillMount(){
    //request Http
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => { this.setState({ listaItens: response.data }); })
      .catch(() => { console.log('Erro ao recuperar os dados!') });
  }
  
  render() {
    return (
      <ScrollView>
        { this.state.listaItens.map( item => ( <Itens key={ item.titulo } item={ item }/> )) }
      </ScrollView>
    );
  }
}
