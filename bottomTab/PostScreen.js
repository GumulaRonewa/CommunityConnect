import React, { Component } from 'react';
import { View, Picker, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default class PostScreen extends Component {
 
  render(){
  	return (
  			<View style={styles.textStyle}>
  				<Text> Post </Text>
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