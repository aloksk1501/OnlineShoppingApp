import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';



import HomeStackNavigator from '../stack-navigators/HomeStackNavigator'

//List of navigator screens

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeStack" component={HomeStackNavigator}
      options={{
        title: "Home",
        headerTitle: '',
        headerRight: () => (
          <View style={styles.headerRight}>
             <Icon name="feed-person" size={24}/>
          </View>
        ),
      }} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  }
}) 

export default DrawerNavigator