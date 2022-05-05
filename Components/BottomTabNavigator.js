import { View, Text } from 'react-native'
import React from 'react'
import Home from './Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SignIn from './SignIn';
import SignUp from './SignUp';
import UserProfile from './UserProfile';

const Tab = createMaterialBottomTabNavigator();


const BottomTabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator labeled={true} activeColor="#f0edf6"
    inactiveColor="#3e2465" initialRouteName="UserProfile" barStyle={
      {backgroundColor:"rgb(247, 107, 62)"}
    }>
    <Tab.Screen name="UserProfile" component={UserProfile} />
  </Tab.Navigator>
  )
}


export default BottomTabNavigator