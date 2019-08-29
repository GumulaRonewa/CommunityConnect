import React, { Component } from 'react';
import { View, Picker, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default class NotificationScreen extends Component {
 
  render(){
  	return (
  			<View style={styles.textStyle}>
  				<Text> Notification </Text>
  			</View>
  		 );
  }
}
const styles = {
   
  textStyle: {
    alignSelf: 'center',
    flex:1,
    justifyContent: 'center'
  }
};