
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';

const TreeScreen = ({ navigation, route }) => {
    return <Text>This is Tree {route.params.name}'s page</Text>;
  };

export default TreeScreen;