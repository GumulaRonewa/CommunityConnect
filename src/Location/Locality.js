import React, { Component } from 'react';
import { View, Picker, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import PickerCheckBox from 'react-native-picker-checkbox';
import Header from '../header/Header'

export default class Locality extends Component {
 
  render(){
  	return (

     <View style={styles.vStyle}>
            <Header headerText={'Region'} />
       <ScrollView
          contentInsetAdjustmentBehavior="automatic" >
      <Card>
         <Text style={styles.texts}> Provinces</Text>
      </Card>
      <Picker>
    	<Picker.Item label="Western Cape" value="WC" />
    	 <Picker.Item label="Eastern Cape" value="EC" />
    	<Picker.Item label="Northern Cape" value="NC" />
    	<Picker.Item label="North West" value="NW" />
    	<Picker.Item label="Mpumalanga" value="MP" />
    	<Picker.Item label="Limpopo" value="LP" />
    	<Picker.Item label="KwaZulu-Natal" value="KZN" />
    	<Picker.Item label="Gauteng" value="GP" />
    	<Picker.Item label="Free State" value="FS" />
    </Picker>
    <Card>
         <Text style={styles.texts}> City/Town </Text>
      </Card>
     <Picker>
    	<Picker.Item label="City1" value="WCd" />
    	 <Picker.Item label="City2" value="EdC" />
    	<Picker.Item label="City3" value="NdC" />
    	<Picker.Item label="City4" value="NdW" />
    	<Picker.Item label="City5" value="MdP" />
    	<Picker.Item label="City5" value="LdP" />
    	
    </Picker>
     <Card>
         <Text style={styles.texts}> Suburbs</Text>
      </Card>
     <PickerCheckBox
        data={items}
        headerComponent={<Text style={{fontSize:25}} >items</Text>}
        ConfirmButtonTitle='OK'
        DescriptionField='itemDescription'
        KeyField='itemKey'
        placeholder='select Suburb(s)'
        arrowColor='#FFD740'
        size={25}
        arrowSize={10}
        placeholderSelectedItems ='$count selected Suburb(s)'
        />
     <CardSection>
       <TouchableOpacity style={styles.buttonStyle}>
         <Text style={styles.textStyle}>Select</Text>
      </TouchableOpacity>
     </CardSection>
   </ScrollView>  
    </View>
  )
  }
}
  const styles = {
   vStyle: {
      backgroundColor:'rgb(237,245,255)',
      flex:1
  }
  ,
  texts: {
    fontSize: 24,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: '500'
  },
   buttonStyle: {
   	backgroundColor: 'rgb(255,255,255)',
    borderRadius: 5,
    borderColor: '#007aff',
    borderWidth: 1,
    height: 40,
    top: 5,
    bottom: 5,
    flex: 0.4,
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
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
