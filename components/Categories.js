import { View, Text } from 'react-native'
import React from 'react'

const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: 'Pick-up'
    },
    {
        image: require("../assets/images/bread.png"),
        text: 'Backery Items'
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: 'Fast foods'
    }
]

export default function Categories() {
  return (
    <View>
      <Text>Categories</Text>
    </View>
  )
}