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
    backgroundColor: '#d37',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Roboto',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    backgroundColor: '#655',
    marginTop: 60,
    marginHorizontal: 50,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width:1, height:5},
    shadowOpacity: 0.75,
    shadowRadius: 5,
  }
});