import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../screens/Dashboard";
import EventDetails from "../screens/EventDetails";


import { MyTabs } from "./TopTabNavigator";
import { MyDrawers } from "./DrawerNavigator";
import { Button } from "react-native";
import SelectedEvents from "../screens/SelectedEvents";

const Stack = createNativeStackNavigator();

const AppStack = (): JSX.Element => {
    return (
        <NavigationContainer> 
            <Stack.Navigator screenOptions={{headerBackTitleVisible: false, statusBarColor: '#DAE0E2'}}>
                <Stack.Screen name="MainScreen" component={MyDrawers} options={{headerShown: false}}/>
                <Stack.Screen name="EventList" component={MyTabs}/>
                <Stack.Screen name="EventDetails" component={EventDetails}/>
                <Stack.Screen name="SelectedEvents" component={SelectedEvents}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack;