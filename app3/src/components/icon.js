import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../styles/styles'

class Icon extends React.Component {
  render() {
    if (this.props.choice == 'Pedra') {
      return (
        <View style={styles.txtPlayer}>
          <Text>{this.props.player}</Text>
          <Image source={require('../../assets/pedra.jpeg')}/>
        </View>
      );
    }else if (this.props.choice == 'Papel') {
      return(
        <View style={styles.txtPlayer}>
          <Text>{this.props.player}</Text>
          <Image source={require('../../assets/papel.jpeg')}/>
        </View>
      );
    }else if (this.props.choice == 'Tesoura') {
      return(
        <View style={styles.txtPlayer}> 
          <Text>{this.props.player}</Text>
          <Image source={require('../../assets/tesoura.jpeg')}/>
        </View>
      );
    }else {
      return false;
    }
  }
}

export default Icon;