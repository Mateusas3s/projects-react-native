import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const logo = require('./src/imgs/logo.png');
const btnJogar = require('./src/imgs/botao_jogar.png');
const btnSobreJogo = require('./src/imgs/sobre_jogo.png');
const btnOutrosJogos = require('./src/imgs/outros_jogos.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} />
        <Image source={btnJogar} />
      </View>

      <View>
        <Image source={btnSobreJogo} />
        <Image source={btnOutrosJogos} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
