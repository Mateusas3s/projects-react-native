import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const logo = require('./src/imgs/logo.png');
const btnJogar = require('./src/imgs/botao_jogar.png');
const btnSobreJogo = require('./src/imgs/sobre_jogo.png');
const btnOutrosJogos = require('./src/imgs/outros_jogos.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.apresentacao}>
        <Image source={logo} />
        <Image source={btnJogar} />
      </View>

      <View style={styles.rodape}>
        <Image source={btnSobreJogo} />
        <Image source={btnOutrosJogos} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61bd8c',
  },
  apresentacao: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  rodape: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
