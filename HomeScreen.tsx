import React from 'react'
import { View, StyleSheet, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';




// Sample data of items
const items = [
  { id: '1', title: 'Item 1', imageUrl: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Item 2', imageUrl: 'https://via.placeholder.com/150' },
  { id: '3', title: 'Item 3', imageUrl: 'https://via.placeholder.com/150' },
  { id: '4', title: 'Item 4', imageUrl: 'https://via.placeholder.com/150' },
  // Add more items as needed
];

const Item = ({ title, imageUrl }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: imageUrl }} style={styles.image} />
    <Text style={styles.itemtitle}>{title}</Text>
  </View>
);


function HomeScreen({ navigation }): React.JSX.Element {
  return (
    <View style={styles.container}>

      {/* Container view */}
      <ScrollView style={{ backgroundColor: 'white' }}>

        {/* Whole Search box line */}
        <View style={{ backgroundColor: 'black', padding: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginRight: 60, borderCurve: 'continuous', top: 40 }}>

          {/* Inside Search input box */}
          <Pressable
            style={{ flexDirection: 'row', alignItems: "center", gap: 13, backgroundColor: "white", borderRadius: 1, height: 38, flex: 1, paddingLeft: 10 }}>
            <Icon name="search" size={24} />
            <TextInput placeholder='Search here' />
          </Pressable>

        </View>


        {/* Cart to add */}

        <View style={styles.headerRight}>
          <FeatherIcon name="shopping-cart" size={33} color={'black'} />
        </View>

        {/* Explore section */}
        <View>
          <Text style={styles.title1} >Explore</Text>
        </View>

        {/* Item Scrolling View */}
        <View style={styles.container}>
          <ScrollView horizontal={true}>
            {items.map(item => (
              <Item key={item.id} title={item.title} imageUrl={item.imageUrl} />
            ))}
          </ScrollView>
        </View>



        {/* Best Selling Items */}
        <View>
          <Text style={styles.title2} >Best Selling</Text>
        </View>
      </ScrollView >
    </View >
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    top: 10,
    right: 10,
    borderLeftWidth: 10
  },

  // Explore
  title1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    left: 20,
    backgroundColor: 'red',
  },
  // Best Selling
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    left: 20,
    marginTop: 21,
    backgroundColor: 'blue',
  },

  // Search Box
  headerRight: {
    marginRight: 20,
    backgroundColor: 'white',
    fontSize: 77,
    left: 340,
    paddingRight: 10,
    top: 2,
    right: 300,
    borderRightWidth: 100,
  },


  //Item container 
  itemContainer: {
    width: 200,
    marginHorizontal: 5,
    alignItems: 'center',
    backgroundColor: 'yellow',
    height: 280,
    borderRadius: 10,
    marginLeft: 18,
  },

  // Item container's Item image
  image: {
    top: 17,
    width: 170,
    height: 170,
    borderRadius: 10,
  },

  // Item container's Item title
  itemtitle: {
    top: 10,
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
})


export default HomeScreen;