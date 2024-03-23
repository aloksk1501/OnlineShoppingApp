import React from 'react'
import { SafeAreaView, View, StatusBar, StyleSheet, Text, Pressable, ImageBackground } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './src/navigation/DrawerNavigator'
import { SearchBar } from 'react-native-screens'
import Icon from 'react-native-vector-icons/Octicons';
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})

export default App
