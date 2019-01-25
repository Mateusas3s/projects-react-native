import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} >Frases do Dia</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D37',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Roboto',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    backgroundColor: '#322',
    width: 500,
    height: 80,
  }
});