import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Settings from '../screens/Settings';

const Tab = createMaterialBottomTabNavigator();

const TabArr = [
    { route: 'Home', label: 'Home', icon: 'home', component: Home, tabBarColor: "red" },
    { route: 'Settings', label: 'Settings', icon: 'heart', component: Settings, tabBarColor: "green" },
];

const BottomTabs = () => {
  return (
    <Tab.Navigator>
    {TabArr.map((_, index) => {
      return (
        <Tab.Screen key={index} name={_.route} component={_.component}
          options={{
            tabBarColor: _.tabBarColor,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name={_.icon} color={color} size={size} />
            )
          }}
        />
      )
    })}
  </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})