import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {user_choice: '',
                  comput_choice: ''}
  }

  jokenpo(user_choice){

    var num_rand = Math.floor(Math.random() * 3);
    var comput_choice = '';

    switch(num_rand){
      case 0: comput_choice = 'Pedra';
      break;
      case 1: comput_choice = 'Papel';
      break;
      case 2: comput_choice = 'Tesoura';
      break;
    }

    this.setState({user_choice: user_choice,
                  comput_choice: comput_choice});
  }

  render() {
    return (
      <View>
        <Text>
          Escolha do Computador:  {this.state.comput_choice}
        </Text>
        <Text>
          Escolha do Usuário: {this.state.user_choice}
        </Text>
        <Text>
          Resultado
        </Text>
        <Button
          title='Pedra'
          onPress={() => {this.jokenpo('Pedra')}}
        />
        <Button
          title='Papel'
          onPress={() => {this.jokenpo('Papel')}}
        />
        <Button
          title='Tesoura'
          onPress={() => {this.jokenpo('Tesoura')}}
        />
      </View>
    );
  }
}
