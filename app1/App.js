import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const generateNumRand = () => {
  var num_rand = Math.random();
  num_rand = Math.floor(num_rand*10);

  alert(num_rand);
}

export default class HelloWorldApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Gerando Números Aleatórios!</Text>

        <Button
          title="Gerar um número aleatório."
          onPress={generateNumRand}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
