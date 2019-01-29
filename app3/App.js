import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

const styles = StyleSheet.create({
  btnChoiceJKP:{
    width: 90,
  },
  painelActions:{
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

class Top extends React.Component {
  render() {
    return (
      <View>
        <Image source={require('./assets/jokenpo.jpeg')}/>
      </View>
    );
  }
}

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
        

        <Text>
          Escolha do Computador:  {this.state.comput_choice}
        </Text>
        <Text>
          Escolha do Usuário: {this.state.user_choice}
        </Text>
        <Text>
          Resultado: {this.state.result}
        </Text>
        
      </View>
    );
  }
}
