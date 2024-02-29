
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TrackerDrawer from '../screens/TrackerDrawer'
import Dashboard from '../screens/Dashboard';


const Drawer = createDrawerNavigator();


export function MyDrawers() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen  name= {'Dashboard'} component={Dashboard}/>
            <Drawer.Screen  name= {'Event Tracker'} component={TrackerDrawer}/>
        </Drawer.Navigator>
    )
}

