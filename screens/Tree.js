
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,ImageBackground, Dimensions } from 'react-native';
import * as React from 'react';

const TreeScreen = ({ navigation, route }) => {
    // return <Text>This is Tree {route.params.name}'s page</Text>;
    return(
        <View style={styles.container}>
        <ImageBackground source={route.params.name} resizeMode="contain" style={styles.image}>
        </ImageBackground>
      </View>
    );
  };

export default TreeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      height: Dimensions.get('window').height,
    },
  });