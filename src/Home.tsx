import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Home = () => {
  return (
    <ScrollView style={styles.root}>
      <View>
        <Text>Find Your Favourite Food</Text>
        <Ionicons name='notifications-circle-outline' size={40}/>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#2A2C38",
  }
})