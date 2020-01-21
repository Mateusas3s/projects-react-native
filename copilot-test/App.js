//Example to make Step by Step App Introduction in React Native
import React, { Component } from 'react';
//Import React
 
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Switch,
} from 'react-native';
//Import basic required components 
import { copilot, walkthroughable, CopilotStep } from 'react-native-copilot';
 
const WalkthroughableText = walkthroughable(Text); //Making a WalkthroughableText
const WalkthroughableImage = walkthroughable(Image); //Making a WalkthroughableImage
 
class App extends Component {
 
  //Setting the state if we want to skip second step
  state = { secondStepActive: true };
 
  componentDidMount() {
    this.props.copilotEvents.on('stepChange', this.handleStepChange);
    //setting a function to handle the step change event
    this.props.start();
    //To start the step by step Walk through
  }
 
  handleStepChange = step => {
    //Handler, in case we want to handle the step change
    console.log(`Current step is: ${step.name}`);
  };
 
  render() {
    return (
      <View style={styles.container}>
        {/*Step 1 to show the heading*/}
        <CopilotStep
          text="This is the heading with some style"
          order={1}
          name="firstUniqueKey">
          <WalkthroughableText style={styles.title}>
            Example of App Introduction Tour in React Native
          </WalkthroughableText>
        </CopilotStep>
        {/*Step 3 to show the Image*/}
        <CopilotStep text="This is a image" order={3} name="thirdUniqueKey">
          <WalkthroughableImage
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png',
            }}
            style={styles.profilePhoto}
          />
        </CopilotStep>
        {/*Step 2 to show the normal text which can be skiped of we make the switch off*/}
        <View style={styles.activeSwitchContainer}>
          <CopilotStep
            active={this.state.secondStepActive}
            text="This is simple text without style"
            order={2}
            name="SecondUniqueKey">
            <WalkthroughableText>
              Default text without style which can be skiped after disabling the
              switch
            </WalkthroughableText>
          </CopilotStep>
          <View style={{ flexGrow: 1 }} />
          <Switch
            onValueChange={secondStepActive =>
              this.setState({ secondStepActive })
            }
            value={this.state.secondStepActive}
          />
        </View>
      {/*Button to start the walkthrough*/}
        <View style={styles.middleView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.start()}>
            <Text style={styles.buttonText}>START APP INTRODUCTION TOUR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default copilot({
  animated: true, // Can be true or false
  overlay: 'svg', // Can be either view or svg
})(App);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginVertical: 20,
  },
  middleView: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  activeSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
});
