import React from 'react';
import Expo from 'expo';
import * as Screens from './screens';
import {StackNavigator} from 'react-navigation';
import {bootstrap} from './style/themeBootstrap';

class ComponentsScreen extends React.Component {
  state = {
    loaded: false,
  }

async componentDidMount() {
    await Expo.Font.loadAsync({
      'robotoLight': require('./assets/fonts/Roboto-Light.ttf'),
      'robotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
      'robotoMed': require('./assets/fonts/Roboto-Medium.ttf'),
    });
     bootstrap();
    this.setState({ loaded: true });
  }
}

const Bikes = StackNavigator({
   Login: {screen: Screens.LoginScreen},
   SignUp: {screen: Screens.SignUpScreen},
   PasswordRecovery: {screen: Screens.PasswordRecoveryScreen},
   Home: {screen: Screens.ComponentsScreen},
   News: {screen: Screens.NewsScreen},
   HistoryList: {screen: Screens.HistoryListScreen},
   Garage: {screen: Screens.GarageScreen},
   Qrcode: {screen: Screens.QrcodeScreen},
   Help: {screen: Screens.HelpScreen}
 }, {
   navigationOptions: {
     headerStyle: {
       backgroundColor: 'white'
     }
   }
});

Expo.registerRootComponent(Bikes);
