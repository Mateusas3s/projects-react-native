import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {user_choice: '',
                  comput_choice: '',
                  result: ''}
  }

  jokenpo(user_choice){

    var num_rand = Math.floor(Math.random() * 3);
    var comput_choice = '';
    var result = '';

    switch(num_rand){
      case 0: comput_choice = 'Pedra';
      break;
      case 1: comput_choice = 'Papel';
      break;
      case 2: comput_choice = 'Tesoura';
      break;
    }

    if (user_choice == comput_choice) {
      result = 'Empate';
    }else if ((user_choice == 'Pedra' && comput_choice == 'Tesoura') || 
              (user_choice == 'Tesoura' && comput_choice == 'Papel') ||
              (user_choice == 'Papel' && comput_choice == 'Pedra')) {
      result = 'Você venceu! :)';
    }else {
      result = 'Você Perdeu! :(';
    }

    this.setState({user_choice: user_choice,
                  comput_choice: comput_choice,
                  result: result});
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
          Resultado: {this.state.result}
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
