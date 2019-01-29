import React from 'react';
import {Text, View, Button} from 'react-native';
import Top from './src/components/top';
import Icon from './src/components/icon';
import styles from './src/styles/styles'

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
      result = 'Você Venceu! :)';
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

        <Top></Top>

        <View style={styles.painelActions}>
          <View style={styles.btnChoiceJKP}>
            <Button
              title='Pedra'
              onPress={() => {this.jokenpo('Pedra')}}
            />
          </View>
          <View style={styles.btnChoiceJKP}>
            <Button
              title='Papel'
              onPress={() => {this.jokenpo('Papel')}}
            />
          </View>
          <View style={styles.btnChoiceJKP}>
            <Button
              title='Tesoura'
              onPress={() => {this.jokenpo('Tesoura')}}
            />
          </View>
        </View>
        
        <View style={styles.painelResult}>
          <Text style={styles.txtResult}>
            {this.state.result}
          </Text>

          <Icon choice={this.state.comput_choice} player='Computador'></Icon>
          <Icon choice={this.state.user_choice} player='Você'></Icon>
        </View>
      </View>
    );
  }
}
