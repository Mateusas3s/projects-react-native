import React from 'react';
import { View, Text, Image } from 'react-native';

export default class Itens extends React.Component {
  
  render() {
    return (
      <View>
        <Image style={{ height:100, width:100 }} source={{ uri: this.props.item.foto }} />
        <Text>{ this.props.item.titulo }</Text>
        <Text>{ this.props.item.valor }</Text>
        <Text>{ this.props.item.local_anuncio }</Text>
        <Text>{ this.props.item.data_publicacao }</Text>
      </View>
      
    );
  }
}
