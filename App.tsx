import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// function TabScreen() {
//   const Tab = createMaterialBottomTabNavigator();
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name='Home' component={HomeScreen}/>
//     </Tab.Navigator>
//   )
// }


function App(){
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App