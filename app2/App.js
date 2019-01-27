import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  styleView: {
    flex: 1,
    backgroundColor: '#d37',
  },
  styleText: {
    fontSize: 30,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'italic',
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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.styleView}>
        <Text style={styles.styleText}>Frases do Dia</Text>
      </View>
    );
  }
}