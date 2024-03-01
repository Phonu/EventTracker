import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LocalEvents from '../screens/LocalEvents';
import OutsideEvents from '../screens/OutsideEvents';

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Local" component={LocalEvents} options={{tabBarActiveTintColor: 'blue'}} />
      <Tab.Screen name="Outside" component={OutsideEvents} options={{tabBarActiveTintColor: 'blue'}} />
    </Tab.Navigator>
  );
};
