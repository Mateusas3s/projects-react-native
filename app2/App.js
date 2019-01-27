import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#222',
  },
  top: {
    flex: 2,
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#655',
    marginTop: 30,
    paddingTop: 5,
  },
  cont: {
    flex: 5,
    fontSize: 10,
    fontWeight: '100',
    textAlign: 'left',
    color: '#000',
    backgroundColor: '#7a6',
  },
  image:{
    flex:10
  },
  button: {
    flex:1,
    marginBottom: 50,
    marginHorizontal: 20,
  },
  rod: {
    flex: 1,
    fontSize: 10,
    fontWeight: '100',
    textAlign: 'left',
    color: '#245',
    backgroundColor: '#f29',
  }
});

const bottonPress = () =>{
  alert("Botão Pressionado!");
}

export default class App extends React.Component {
  render() {
    const {main, top, cont, image, button, rod} = styles;
    return (

      <View style={main}>
        <Text style={top}>Frases do Dia</Text>
        <Text style={cont}>Frases do Dia</Text>
        <Button 
          style={button}
          title="Clique aqui"
          color="#837493"
          accessibilityLabel="Clique para abrir as notícias!"
          onPress={bottonPress}
        />
        <Image 
          style={image}
          source={require('./assets/imgs/uvas.png')}
        />
        <Image 
          style={image}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Text style={rod}>Frases do Dia</Text>
      </View>
    );
  }
}