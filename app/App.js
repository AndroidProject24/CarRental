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

const CarRental = StackNavigator({
   Home: {screen: Screens.ComponentsScreen},
   News: {screen: Screens.NewsScreen},
   HistoryList: {screen: Screens.HistoryListScreen},
   Garage: {screen: Screens.GarageScreen},
   Qrcode: {screen: Screens.QrcodeScreen},
   Help: {screen: Screens.HelpScreen},

  //TEST
   Button: {screen: Screens.ButtonScreen},
   Choice: {screen: Screens.ChoiceScreen},
   Tab: {screen: Screens.TabScreen},
   Card: {screen: Screens.CardScreen},
   Avatar: {screen: Screens.AvatarScreen},
   Input: {screen: Screens.InputScreen},
   Image: {screen: Screens.ImageScreen},
   Settings: {screen: Screens.SettingsScreen}
 }, {
   navigationOptions: {
     headerStyle: {
       backgroundColor: 'white'
     }
   }
});

Expo.registerRootComponent(CarRental);
