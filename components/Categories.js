import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer, 
  createMaterialTopTabNavigator,
  createTabNavigator
} from 'react-navigation';
import Home from './Screens/Home';
import Rank from './Screens/Rank';
import New from './Screens/New';
import Maternity from './Screens/Maternity';

class Categories extends Component {
  render() {
    return <HomeNavigator /> ;
  }
}
const TabNavigatorConfig={
  tabBarOptions: {
    activeTintColor: '#0984e3',
    inactiveTintColor: '#74b9ff',
    indicatorStyle: {
      backgroundColor: '#0984e3',
      height:2,
      marginBottom: 0,
    },
    labelStyle: {
      fontSize: 10,
    },
    tabStyle: {
      width: 90,
    },
    style: {
      backgroundColor: '#fff',
    },
  }
}
const HomeNavigator = createMaterialTopTabNavigator({
  Home: Home,
  Rank: Rank,
  New: New,
  Maternity: Maternity,
},TabNavigatorConfig);

const AppNavigator = createBottomTabNavigator({
  Home: Home,
  Rank: Rank,
  New: New,
  Maternity: Maternity,
}, );

export default createAppContainer(HomeNavigator);

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
