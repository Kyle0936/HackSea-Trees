import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import * as React from 'react';



const HomeScreen = ({ navigation }) => {
    return (
      // <Button
      //   title="Go to Jane's profile"
      //   onPress={() =>
      //     navigation.navigate('Profile', { name: 'Jane' })
      //   }
      // />

      <View style={styles.container}>
      <Image source={require('../imgs/homepage.jpg')} resizeMode="cover" style={styles.image}/>
    </View>
    );
  };

  export default HomeScreen;

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