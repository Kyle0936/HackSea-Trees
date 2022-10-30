import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import * as React from 'react';



const Notification = ({ navigation }) => {
    return (

      <View style={styles.container}>
      <Image source={require('../imgs/notification.jpg')} resizeMode="cover" style={styles.image}/>
    </View>
    );
  };

  export default Notification;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      width: Dimensions.get('window').width,
    },
  });