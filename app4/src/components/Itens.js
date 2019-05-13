import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Itens extends React.Component {
  
  render() {
    return (
<<<<<<< HEAD
      <View style={StyleSheet.item}>
        <Image style={{ height:100, width:100 }} source={{ uri: this.props.item.foto }} />
        <Text>{ this.props.item.titulo }</Text>
        <Text>{ this.props.item.valor }</Text>
        <Text>{ this.props.item.local_anuncio }</Text>
        <Text>{ this.props.item.data_publicacao }</Text>
=======
      <View style={styles.item}>
        <View style={styles.foto}>
          <Image style={{ height:100, width:100 }} source={{ uri: this.props.item.foto }} />
        </View>

        <View style={styles.detalhesItem}>
          <Text style={styles.txtTitulo}>{ this.props.item.titulo }</Text>
          <Text style={styles.txtValor}>R$ { this.props.item.valor }</Text>
          <Text style={styles.txtDetalhes}>Local: { this.props.item.local_anuncio }</Text>
          <Text style={styles.txtDetalhes}>Data Publicação: { this.props.item.data_publicacao }</Text>
        </View>
>>>>>>> ae3f3645c7d7872794857f4d95d6be14eb2db4c1
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  item: {
<<<<<<< HEAD
=======
    backgroundColor: '#FFF',
>>>>>>> ae3f3645c7d7872794857f4d95d6be14eb2db4c1
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
<<<<<<< HEAD
  }

});
=======
    flexDirection: 'row'
  },

  foto: {
    width: 102,
    height: 102
  },

  detalhesItem: {
    marginLeft: 20,
    flex: 1
  },

  txtTitulo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  }, 

  txtValor: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  txtDetalhes: {
    fontSize: 16,
  }
});
>>>>>>> ae3f3645c7d7872794857f4d95d6be14eb2db4c1
