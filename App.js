
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: CheckBox has been extracted from react-native core',

]);
import { Text, StyleSheet, YellowBox, AppRegistry } from 'react-native';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboardList, faPlusCircle, faMapMarkerAlt, faBell, faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import HomeScreen from './src/HomeScreen'
import PostScreen from './src/PostScreen'
import LocationScreen from './src/LocationScreen'
import NotificationScreen from './src/NotificationScreen'
import More from './src/More'
import CategoryScreen from './src/CategoryScreen'

import { DarkModeProvider } from 'react-native-dark-mode'
import React, { Component } from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';


const tab =createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesomeIcon icon={ faClipboardList }  size={25} />

      )
    }
  },
   Post: {
    screen: PostScreen,
    navigationOptions: {
      tabBarLabel: 'Post',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesomeIcon icon={ faPlusCircle }  size={25} />
      )
    }
  },
  Notification: {
    screen: NotificationScreen,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesomeIcon icon={ faBell }  size={25} />
      )
    }
  },
  Location: {
    screen: LocationScreen,
    navigationOptions: {
      tabBarLabel: 'Location',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesomeIcon icon={ faMapMarkerAlt }  size={25} />
      )
    }
  }
},
    {
  initialRouteName: 'Home',
  order: ['Home','Post','Notification','Location'],
  shifting: true
});

 const styles = {
   
  textStyle: {
    alignSelf: 'center',
    flex:1,
    justifyContent: 'center'
  }
};
const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: tab,
    navigationOptions: {
        title: 'Main',
        drawerLabel: 'Main'
      }
  },
  Posts: {
    screen: PostScreen,
     navigationOptions: {
        title: 'MyPost',
        drawerLabel: 'MyPost'
      }
  },
   More: {
    screen: CategoryScreen,
     navigationOptions: {
        title: 'Categories',
        drawerLabel: 'Categories'
      }
  },
   Logout: {
    screen: More,
     navigationOptions: {
        title: 'SignOut',
        drawerLabel: 'SignOut'
      }
  }
})
const AppSwitchNavigator =createSwitchNavigator({
  Home: { screen: AppDrawerNavigator },
  Dashboard: { screen: tab }
});
const AppContainer = createAppContainer(AppSwitchNavigator);

class App extends Component {
  render(){
    return (
          <AppContainer />
       );
  }
}
export default App;