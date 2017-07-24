import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  TouchableOpacity,
  Navigator
} from 'react-native';

import {RkButton,RkText, RkTheme, RkStyleSheet} from 'react-native-ui-kitten';

const { width, height } = Dimensions.get('window');
const paddingValue = 8;
let data = [
  {
  id:'1',
  title: 'News',
  icon: 'icon',
  route: 'News',
},
{
  id:'2',
  title: 'Garage',
   icon: 'icon',
  route: 'Garage'
},
{
  id:'3',
  title: 'HistoryList',
   icon: 'icon',
  route: 'HistoryList'
},
{
  id:'4',
  title: 'Qrcode',
   icon: 'icon',
  route: 'Qrcode'
},
{
  id:'5',
  title: 'Help',
   icon: 'icon',
  route: 'Help'
},
{
  id:'6',
  title: 'Help',
   icon: 'icon',
  route: 'Help'
},
{
  id:'7',
  title: 'Help',
   icon: 'icon',
  route: 'Help'
},
{
  id:'8',
  title: 'Help',
   icon: 'icon',
  route: 'Help'
},
{
  id:'9',
  title: 'Help',
   icon: 'icon',
  route: 'Help'
},
{
  id:'10',
  title: 'Help',
   icon: 'icon',
  route: 'Help'
},
{
  id:'11',
  title: 'Help',
   icon: 'icon',
  route: 'Help'
},
{
  id:'12',
  title: 'Help',
   icon: 'icon',
  route: 'Help'
},
{
  id:'13',
  title: 'Help',
   icon: 'icon',
  route: 'Help'
},
{
  id:'14',
  title: 'Help',
   icon: 'icon',
  route: 'Help'
},
{
  id:'15',
  title: 'Help',
   icon: 'icon',
  route: 'Help'
},
{
  id:'16',
  title: 'Help',
   icon: 'icon',
  route: 'Help'
}]
export class NewsScreen extends React.Component {
  constructor(props) {
   super(props)
    this.state = { data: Array.from(data) }
 }
 static navigationOptions = {
   title: 'News'
 };

 componentWillMount() {
    this.setState({ data: data });
  }

   renderRowItem = (itemData) => {
       return (
         <RkText rkType='bold'>
          {itemData.title}
         </RkText>
       )
     }

     render () {
       return (
           <View style={styles.rootContainer}>
           <FlatList
             data={this.state.data}
             numColumns={1}
             renderItem={({item, index}) => this.renderRowItem(item)}
             keyExtractor={(item, index) => item.id}/>
           </View>

        );
     }
   }
let styles = RkStyleSheet.create(theme => ({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  root: {
    backgroundColor: theme.colors.screen.scroll,
    padding: paddingValue,
  },
  icon: {
    marginBottom: 16
  }
}));
