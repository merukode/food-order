import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const promo = {uri: 'https://raw.githubusercontent.com/merukode/food-order/main/src/assets/promo.png'}

const Home = () => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Find Your Favourite Food</Text>
        <Ionicons style={styles.notifications}name='notifications-circle-outline' size={40} />
      </View>
      <View style={styles.searchParent}>
        <View style={styles.searchChild}>
          <Ionicons style={styles.searchIcon} name='search' size={30}/>
          <TextInput placeholder='What do you want to order ?' placeholderTextColor="#AFAFAF"/>
        </View>
        <Ionicons style={styles.filterIcon} name='filter' size={30}/>
      </View>
      <View style={styles.promoView}>
        <ImageBackground source={promo} resizeMode='cover' style={styles.promo}>
          <View style={styles.promoLeft}></View>
          <View>
          <Text style={styles.promoText}>Special Deal For October</Text>
          <Button title='Buy Now' color="#2A2C38"/>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.nearest}>
        <Text style={{color: "#fff", fontSize: 15, fontWeight: "bold"}}>Nearest Restaurant</Text>
        <Text style={{color: "#6B50F6"}}>View More</Text>
      </View>
      <View>
        
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#2A2C38",
    padding: 20,
    paddingTop: 50
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textHeader: {
    color: "white",
    fontSize: 30,
    width: 250,
    fontFamily: "Poppins-Bold"
  },
  notifications: {
    color: "#4023D7",
    backgroundColor: "#22242E",
    padding: 10,
    borderRadius: 15
  },
  searchParent: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  searchChild: {
    padding: 10,
    backgroundColor: "#22242E",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    width: 300
    
  },
  searchIcon: {
    color: "white"
  },
  filterIcon: {
    backgroundColor: "#22242E",
    padding: 15,
    color: "white",
    borderRadius: 10
  },
  promoView: {
    marginTop: 30,
  },
  promo: {
    flex: 1,
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10

  },
  promoLeft: {
    width: 200,
    height: 150,
  },
  promoText: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    width: 150,
    color: "#fff"
  },
  promoBtn: {
    color: "#6B50F6",
    borderRadius: 20
  },
  nearest: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  }

})