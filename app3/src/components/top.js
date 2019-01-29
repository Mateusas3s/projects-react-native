import React from 'react';
import { View, Image } from 'react-native';

class Top extends React.Component {
  render() {
    return (
      <View>
        <Image source={require('../../assets/jokenpo.jpeg')}/>
      </View>
    );
  }
}

export default Top;