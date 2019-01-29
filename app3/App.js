import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {user_choice: ''}
  }

  jokenpo(user_choice){
    this.setState({user_choice: user_choice});
  }

  render() {
    return (
      <View>
        <Text>
          Escolha do Computador
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
