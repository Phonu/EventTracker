
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SelectedEvents from '../screens/SelectedEvents'
import { MyTabs } from './TopTabNavigator';

const Drawer = createDrawerNavigator();

export function MyDrawers() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen  name= {'All Events'} component={MyTabs}/>
            <Drawer.Screen  name= {'My Event'} component={SelectedEvents}/>
        </Drawer.Navigator>
    )
}

