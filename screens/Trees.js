import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TreeScreen from './Tree.js';
import Test from './Test.js';


const Stack = createNativeStackNavigator();

const Trees = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Test"
          component={Test}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Tree" component={TreeScreen} />
      </Stack.Navigator>
  );
};

export default Trees;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });