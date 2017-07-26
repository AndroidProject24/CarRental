import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  FlatList,
  View,
  Dimensions,
  TouchableOpacity,
  Navigator
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {RkButton,RkText, RkTheme, RkStyleSheet} from 'react-native-ui-kitten';

const paddingValue = 8;

let data = [
  {
  id:'1',
  title: 'News',
  icon: 'newspaper-o',
  route: 'News',
},
{
  id:'2',
  title: 'Garage',
  icon: 'motorcycle',
  route: 'Garage'
},
{
  id:'3',
  title: 'HistoryList',
  icon: 'history',
  route: 'HistoryList'
},
{
  id:'4',
  title: 'Qrcode',
  icon: 'qrcode',
  route: 'Qrcode'
},
{
  id:'5',
  title: 'Help',
  icon: 'question-circle-o',
  route: 'Help'
}]

export class ComponentsScreen extends React.Component {
  constructor(props) {
   super(props)
    this.state = { data: Array.from(data) }
 }
 static navigationOptions = {
   title: 'Card Rental'
 };

 _calculateItemSize() {
   let {height, width} = Dimensions.get('window');
   return (width - paddingValue * 6) / 2;
 }

 componentWillMount() {
    this.setState({ data: data });
  }

  renderRowItem = (itemData) => {
    let size=this._calculateItemSize();
      return (
        <RkButton rkType='square shadow' style={{width: size,height: size,backgroundColor: '#ffffff', marginLeft:paddingValue, marginBottom: paddingValue
         , flexDirection: 'column',justifyContent: 'space-between', alignItems: 'center'}}
        onPress={() => this.selectComponent(itemData)}>
        <FontAwesome name={itemData.icon} size={80} style={styles.icon}/>
        <RkText style={styles.text}>{itemData.title}</RkText>
        </RkButton>
      )
    }
    selectComponent(itemData) {
      const {navigate} = this.props.navigation;
      navigate(itemData.route);
    }
    render () {
      return (
          <View style={styles.root} contentContainerStyle={styles.rootContainer}>
          <FlatList
            data={this.state.data}
            numColumns={2}
            renderItem={({item, index}) => this.renderRowItem(item)}
            keyExtractor={(item, index) => item.id}/>
          </View>
       );
    }
  }
let styles = RkStyleSheet.create(theme => ({
  //console.log('renderRowItem'+size);
  root: {
    backgroundColor: theme.colors.screen.scroll,
    padding: paddingValue
  },
  rootContainer: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dot: {
    fontSize: 6.5,
    marginLeft: 4,
    marginVertical: 6,
    color: theme.colors.text.inverse
  },
  icon: {
    marginBottom: 16
  },
  text: {
    marginBottom: 16
  }
}));
