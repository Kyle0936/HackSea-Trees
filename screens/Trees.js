import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";

import TreeScreen from "./Tree.js";

const Stack = createNativeStackNavigator();

const treeRegion = {
    latitude: 47.6150,
    longitude: -122.2010,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

const Temp = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <MapView style={styles.map}        
        initialRegion={{
          latitude: 47.610378,
          longitude: -122.200676,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        }}
        >
            <Marker coordinate={treeRegion} />
            </MapView>
      <FlatList
        data={[
          {
            key: require("../imgs/remove.jpg"),
            img: require("../imgs/cuttree.jpg"),
          },
          {
            key: require("../imgs/tree.jpg"),
            img: require("../imgs/treeCard.jpg"),
          },
          {
            key: require("../imgs/tree2.jpg"),
            img: require("../imgs/treeCard.jpg"),
          },
          {
            key: require("../imgs/tree3.jpg"),
            img: require("../imgs/untree.jpg"),
          },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8} 
            onPress={() => navigation.navigate("Tree", { name: item.key })}
            style={styles.header}
          >
            <Image style={styles.img} resizeMode="contain" source={item.img} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const Trees = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Temp}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Tree" component={TreeScreen} />
    </Stack.Navigator>
  );
};

export default Trees;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 400,
    height: 120,
  },
  map: {
    width: Dimensions.get('window').width,
    height: 300,
    marginBottom: 20,
  },
});
