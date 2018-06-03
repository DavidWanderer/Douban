import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from './Home';
import FindFilm from './FindFilm';
import My from './My';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabBar = TabNavigator({
  热映: {
    screen: Home,
    navigationOptions:{
      tabBarLabel: '热映',
      tabBarIcon: ({tintColor}) => (
        <Icon name="tv" size={20} color={tintColor}/>
      ),
    }
  },
  找片: {
    screen: FindFilm,
    navigationOptions:{
      tabBarLabel: '找片',
      tabBarIcon: ({tintColor}) => (
        <Icon name="eye" size={20} color={tintColor}/>
      ),
    }
  },
  我的: {
    screen: My,
    navigationOptions:{
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor}) => (
        <Icon name="user" size={20} color={tintColor}/>
      ),
    }
  }
});

const MainNavigation = StackNavigator({
  Home: { screen: TabBar},
});

export default MainNavigation;
