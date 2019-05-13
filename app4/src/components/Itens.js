import React from 'react';
import { View, Text, Image } from 'react-native';

export default class Itens extends React.Component {
  
  render() {
    return (
      <View style={StyleSheet.item}>
        <Image style={{ height:100, width:100 }} source={{ uri: this.props.item.foto }} />
        <Text>{ this.props.item.titulo }</Text>
        <Text>{ this.props.item.valor }</Text>
        <Text>{ this.props.item.local_anuncio }</Text>
        <Text>{ this.props.item.data_publicacao }</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
  }

});