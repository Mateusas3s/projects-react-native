import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyComponent extends React.Component{
  render(){
    return(
      <View>
        <Text>{this.props.prop1}</Text>
        <Text>{this.props.prop2}</Text>
        <Text>{this.props.prop3}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <MyComponent prop1='Banana' prop2='Abacaxi' prop3='Uva'></MyComponent>
    );
  }
}
