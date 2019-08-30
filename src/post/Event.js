import React, { Component } from 'react';
import { View, Picker, Text, TouchableOpacity, TextInput, Image, KeyboardAvoidingView} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import CardSection from './CardSection';
import Header from '../header/Header';
import PickerCheckBox from 'react-native-picker-checkbox';
import DatePicker from 'react-native-datepicker';
import { faImage, faCamera, faMapPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Marker } from 'react-native-maps';


export default class Event extends Component{
	state = {
		photo :null,
	}
	choosePhoto = () =>{
		const options ={
			noData: true,
		};
		ImagePicker.launchImageLibrary(options, (response) => {
			if (response.uri) {
        		this.setState({ photo: response });
      		}
 	 });
	}
  Map =() =>{
    <MapView
      region={this.state.region}
      onRegionChange={this.onRegionChange}
      >
      {this.state.markers.map(marker => (
        <Marker
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
        />
  ))}
</MapView>
  }
	takePhoto = () =>{
		const options ={
			noData: true,
		};
		ImagePicker.launchCamera(options, (response) => {
			 if (response.uri) {
        		this.setState({ photo: response });
      		}
  		});
	}
render(){
	const { photo } = this.state;
  	return (
     <View style={styles.ViewStyle}>
         <Header headerText={'Add an Event'} />
     <KeyboardAvoidingView style={styles.ViewStyle}>
        <PickerCheckBox
        	data={items}
        	headerComponent={<Text style={{fontSize:25}} >items</Text>}
        	ConfirmButtonTitle='OK'
	        DescriptionField='itemDescription'
	        KeyField='itemKey'
	        placeholder='select location(s)'
	        arrowColor='#007aff'
            width={200}
	        size={25}
	        arrowSize={5}
	        placeholderSelectedItems ='$count selected location(s)'
        />
        <CardSection>
          <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2018-05-01"
        maxDate="2090-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 2,
            marginLeft: 0
          },
          dateInput: {
            backgroundColor: 'rgb(255,255,255)',
            height:30,
            marginLeft: 36,
            borderRadius: 5,
        borderColor: '#007aff',
        borderWidth: 1
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </CardSection>
        <TextInput
         style={styles.textArea} 
         multiline={true}
        />
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ height: 200 }}
          />
        )}
        
      <CardSection>
         <TouchableOpacity onPress={this.choosePhoto}>
         <FontAwesomeIcon icon={ faImage} style={styles.iconStyle} size={30} />
      	</TouchableOpacity>
      	<TouchableOpacity onPress={this.takePhoto}>
         <FontAwesomeIcon icon={ faCamera } style={styles.iconStyle} size={30} />
      	</TouchableOpacity>
      	<TouchableOpacity onPress={this.Map}>
          <FontAwesomeIcon icon={ faMapPin } style={styles.iconStyle} size={30} />
      	</TouchableOpacity>
      	<TouchableOpacity style={styles.buttonStyle}>
         <Text style={styles.textStyle}>Post</Text>
       </TouchableOpacity>

      </CardSection>
     </KeyboardAvoidingView>
     </View>
  )
 }}
const styles = {
   textArea: {
   	fontSize: 14,
   	flex:1,
   	textAlignVertical: "top",
   	borderColor: 'rgb(40,125,255)',
    borderWidth: 1
    },
    ViewStyle: {
     flex:1
  },
  iconStyle: {
  	width: 120,
  	height: 40,
  	marginLeft: 8,
  	color:'rgb(0,0,0)'
  },
   buttonStyle: {
   	backgroundColor: 'rgb(255,255,255)',
    borderRadius: 5,
    borderColor: '#007aff',
    borderWidth: 1,
    flex: 0.5,
    height: 35,
    paddingBottom:3,
    marginLeft: 8,
    marginRight: 8 
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 6,
    paddingBottom: 12
  }
};
const items = [
  {
    itemKey:1,
    itemDescription:'Suburb 1'
    },
  {
    itemKey:2,
    itemDescription:'Suburb 2'
    },
  {
    itemKey:3,
    itemDescription:'Suburb 3'
    }
  ];