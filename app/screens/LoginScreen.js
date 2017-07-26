import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Keyboard
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard, RkStyleSheet
} from 'react-native-ui-kitten';
import { LinearGradient } from 'expo';
import {RkTheme} from 'react-native-ui-kitten';
import {scale, scaleModerate, scaleVertical} from '../utils/scale';

export class LoginScreen extends React.Component {
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
        <View style={styles.header}>
          {renderIcon()}
          <RkText rkType='light h1'>React Native</RkText>
          <RkText rkType='logo h0'>UI Kitten</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType='rounded' placeholder='Username'/>
            <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry={true}/>
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
                        LOGIN
                      </RkText>
            </LinearGradient>
          </View>

          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType='primary3'>Don’t have an account?</RkText>
              <RkButton rkType='clear' onPress={() => this.props.navigation.navigate('SignUp')}>
                <RkText rkType='header6'> Sign up now </RkText>
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
    padding: scaleVertical(16),
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.screen.base
  },
  image: {
    height: scaleVertical(77),
    resizeMode: 'contain'
  },
  header: {
    paddingBottom: scaleVertical(10),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  content: {
    justifyContent: 'space-between'
  },
  save: {
    marginVertical: 20
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24),
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    borderColor: theme.colors.border.solid
  },
  footer: {}
}));
