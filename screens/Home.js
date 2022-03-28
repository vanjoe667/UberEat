import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HeaderTab from '../components/HeaderTab'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{backgroundColor:'white', padding:15}}>
        <HeaderTab />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  )
}