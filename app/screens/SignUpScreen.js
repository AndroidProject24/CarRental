import React from 'react';
import {
  View,
  Image,
  Keyboard
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
import { LinearGradient } from 'expo';
import {scale, scaleModerate, scaleVertical} from '../utils/scale';

export class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    let renderIcon = () => {
        return <Image style={styles.image} source={require('../assets/images/logo.png')}/>;
    };
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={ (e) => true}
        onResponderRelease={ (e) => Keyboard.dismiss()}>
        <View style={{alignItems: 'center'}}>
          {renderIcon()}
          <RkText rkType='h1'>Registration</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType='rounded' placeholder='Name'/>
            <RkTextInput rkType='rounded' placeholder='Email'/>
            <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry={true}/>
            <RkTextInput rkType='rounded' placeholder='Confirm Password' secureTextEntry={true}/>
            <LinearGradient
                      colors={['#ff9147', '#f24645', '#ff524c']}
                      style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}
                      onPress={() =>
                        this.props.navigation.navigate('Home')
                      }>
                      <RkText
                        style={{
                          backgroundColor: 'transparent',
                          fontSize: 15,
                          color: '#fff',
                        }}onPress={() =>
                          this.props.navigation.navigate('Home')
                        }>
                        SIGN UP
                      </RkText>
            </LinearGradient>
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType='primary3'>Already have an account?</RkText>
              <RkButton rkType='clear'  onPress={() => this.props.navigation.navigate('Login1')}>
                <RkText rkType='header6'> Sign in now </RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </RkAvoidKeyboard>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.screen.base
  },
  image: {
    marginBottom: 10,
    height:scaleVertical(77),
    resizeMode:'contain'
  },
  content: {
    justifyContent: 'space-between'
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: 'space-around'
  },
  footer:{
    justifyContent:'flex-end'
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
}));
