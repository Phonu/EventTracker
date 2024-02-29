import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ThumbnailView from '../screens/ThumbnailView';
import GridView from '../screens/GridView';


const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Thumbnail-View" component={ThumbnailView} />
      <Tab.Screen name="Grid-View" component={GridView} />
    </Tab.Navigator>
  );
};
