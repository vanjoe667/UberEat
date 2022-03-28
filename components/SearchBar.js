import { View, Text, Platform } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar() {
  return (
    <View style={{
        marginTop: 15,
        flexDirection: 'row'
    }}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        styles={{
         textInput: {
             backgroundColor: '#eee',
             borderRadius: 20,
             fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
             marginTop: 7
         },
         textInputContainer: {
             backgroundColor: '#eee',
             borderRadius: 50,
             flexDirection: 'row',
             alignItems: 'center',
             marginRight: 10
         }
      }} 
      renderLeftButton = {() => (
          <View style={{marginLeft:10}}>
              <Ionicons name='location-sharp' size={24}/>
          </View>
      )}
      renderRightButton = {() => (
        <View style={{
            flexDirection: 'row', 
            alignItems: 'center',
            marginRight: 8,
            padding: 9,
            borderRadius: 30,
            backgroundColor: 'white'
        }}>
            <AntDesign name='clockcircle' size={11} style={{marginRight: 6}} />
            <Text>Search</Text>
        </View>
    )}
      />
    </View>
  )
}