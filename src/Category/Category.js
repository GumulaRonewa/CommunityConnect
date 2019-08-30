import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import CardSection from './CardSection';
import Header from '../header/Header'

export default class Category extends Component{
	state={
    oneColor:'white',
    twoColor:'white',
    threeColor:'white',
    fourColor:'white',
    fiveColor:'white',
    sixColor:'white',
    sevenColor:'white',
    eightColor:'white',

  };

  oneColor(){
    const color= this.state.oneColor;
    var currentColor;
    if (color==='white') {
    	currentColor='#007aff';
    }
    else{
     	currentColor='white';   	
    }
    this.setState({oneColor:currentColor});
  }
  twoColor(){
    const color= this.state.twoColor;
    var currentColor;
    if (color==='white') {
    	currentColor='#007aff';
    }
    else{
     	currentColor='white';   	
    }
    this.setState({twoColor:currentColor});
  }
  threeColor(){
    const color= this.state.threeColor;
    var currentColor;
    if (color==='white') {
    	currentColor='#007aff';
    }
    else{
     	currentColor='white';   	
    }
    this.setState({threeColor:currentColor});
  }
  fourColor(){
    const color= this.state.fourColor;
    var currentColor;
    if (color==='white') {
    	currentColor='#007aff';
    }
    else{
     	currentColor='white';   	
    }
    this.setState({fourColor:currentColor});
  }
   fiveColor(){
    const color= this.state.fiveColor;
    var currentColor;
    if (color==='white') {
    	currentColor='#007aff';
    }
    else{
     	currentColor='white';   	
    }
    this.setState({fiveColor:currentColor});
  }
  sixColor(){
    const color= this.state.sixColor;
    var currentColor;
    if (color==='white') {
    	currentColor='#007aff';
    }
    else{
     	currentColor='white';   	
    }
    this.setState({sixColor:currentColor});
  }
   sevenColor(){
    const color= this.state.sevenColor;
    var currentColor;
    if (color==='white') {
    	currentColor='#007aff';
    }
    else{
     	currentColor='white';   	
    }
    this.setState({sevenColor:currentColor});
  }
  eightColor(){
    const color= this.state.eightColor;
    var currentColor;
    if (color==='white') {
    	currentColor='#007aff';
    }
    else{
     	currentColor='white';   	
    }
    this.setState({eightColor:currentColor});
  }
render(){
  	return (
  		<View style={styles.ViewStyle}>
            <Header headerText={'Category'} />

	        <ScrollView
	          contentInsetAdjustmentBehavior="automatic" >
	         <CardSection>
	          	<TouchableOpacity style={[styles.buttonStyle,{backgroundColor:this.state.oneColor}]} onPress={()=>this.oneColor()}>
	          		<Text style={styles.textStyle}>Sports</Text>
	       		</TouchableOpacity>
	       		<TouchableOpacity style={[styles.buttonStyle,{backgroundColor:this.state.twoColor}]} onPress={()=>this.twoColor()}>
	          		<Text style={styles.textStyle}>Arts</Text>
	       		</TouchableOpacity>
	         </CardSection>
	         <CardSection>
	          	<TouchableOpacity style={[styles.buttonStyle,{backgroundColor:this.state.threeColor}]} onPress={()=>this.threeColor()}>
	          		<Text style={styles.textStyle}>Music</Text>
	       		</TouchableOpacity>
	       		<TouchableOpacity style={[styles.buttonStyle,{backgroundColor:this.state.fourColor}]} onPress={()=>this.fourColor()}>
	          		<Text style={styles.textStyle}>Comedy</Text>
	       		</TouchableOpacity>
	         </CardSection>
	         <CardSection>
	          	<TouchableOpacity style={[styles.buttonStyle,{backgroundColor:this.state.fiveColor}]} onPress={()=>this.fiveColor()}>
	          		<Text style={styles.textStyle}>Religious</Text>
	       		</TouchableOpacity>
	       		<TouchableOpacity style={[styles.buttonStyle,{backgroundColor:this.state.sixColor}]} onPress={()=>this.sixColor()}>
	          		<Text style={styles.textStyle}>Recreational</Text>
	       		</TouchableOpacity>
	         </CardSection>
	         <CardSection>
	          	<TouchableOpacity style={[styles.buttonStyle,{backgroundColor:this.state.sevenColor}]} onPress={()=>this.sevenColor()}>
	          		<Text style={styles.textStyle}>Other</Text>
	       		</TouchableOpacity>
	       		<TouchableOpacity style={[styles.buttonStyle,{backgroundColor:this.state.eightColor}]} onPress={()=>this.eightColor()}>
	          		<Text style={styles.textStyle}>All</Text>
	       		</TouchableOpacity>
	         </CardSection>
   			</ScrollView>
   		</View>
  )
  }
}
const styles = {
  
   buttonStyle: {
    borderRadius: 5,
    borderColor: '#007aff',
    borderWidth: 1,
    height:80,
    flex: 0.5,
    marginLeft: 5,
    marginRight: 5
  },
  ViewStyle: {
     flex:1,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 26,
    paddingBottom: 10
  }
};