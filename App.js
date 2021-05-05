import  React, {Component} from 'react';
import { Text, View, StyleSheet, Button, Header } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Facebook from './screens/fb';
import Instagram from './screens/in';



export default function App() {
  return (
    <View style={styles.container}>

<AppContainer/>

    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Instagram}
})

const AppContainer = createAppContainer(
  TabNavigator
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FBFB4D',
    padding: 8,
  },
});
