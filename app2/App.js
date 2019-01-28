import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#538530',
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 2,
    elevation: 2, 
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  }
});

const createNewPhrase = () =>{
  var num_rand = Math.random();
  num_rand = Math.floor(num_rand*5);

  var phrases = Array();
  phrases[0] = 'Faça. Ou não faça. Não existe a tentativa.';
  phrases[1] = 'O medo é o caminho para o lado negro.';
  phrases[2] = 'Sempre passar o que você aprendeu.';
  phrases[3] = 'Seres luminosos somos nós. Não esta matéria bruta.';
  phrases[4] = 'Que a Força esteja com você.';

  var choiced_phrase = phrases[num_rand];
  Alert.alert(choiced_phrase);
}

export default class App extends React.Component {
  render() {
    const {main, button, textButton} = styles;
    return (

      <View style={main}>
        <Image source={require('./assets/imgs/logo.png')}/>
        <TouchableOpacity onPress={createNewPhrase} style={button}>
          <Text style={textButton}>
            Nova Frase
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}