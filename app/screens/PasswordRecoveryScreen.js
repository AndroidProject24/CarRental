import React from 'react';
import {
  View,
  Image,
  Keyboard
} from 'react-native';
import {
  RkStyleSheet,
  RkText,
  RkTextInput,
  RkTheme
} from 'react-native-ui-kitten';
import { LinearGradient } from 'expo';
import {scale, scaleModerate, scaleVertical} from '../utils/scale';

export class PasswordRecoveryScreen extends React.Component {
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
      <View behavior='position'
            style={styles.screen}
            onStartShouldSetResponder={ (e) => true}
            onResponderRelease={ (e) => Keyboard.dismiss()}>
        <View style={styles.header}>
          {renderIcon()}
          <RkText rkType='h1'>Password Recovery</RkText>
        </View>
        <View style={styles.content}>
          <RkTextInput rkType='rounded' placeholder='Email'/>
          <RkText rkType='secondary5 secondaryColor center'>
            Enter your email below to receive your password reset instructions
          </RkText>
        </View>
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
                    SEND
                  </RkText>
        </LinearGradient>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: scaleVertical(24),
    justifyContent: 'space-between',
    backgroundColor: theme.colors.screen.base
  },
  header: {
    alignItems: 'center'
  },
  image: {
    marginVertical: scaleVertical(27),
    height: scaleVertical(77),
    resizeMode: 'contain'
  },
  content: {
    alignItems: 'center'
  }
}));
