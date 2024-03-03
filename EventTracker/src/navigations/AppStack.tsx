import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../screens/Dashboard";
import EventDetails from "../screens/EventDetails";
import { MyTabs } from "./TopTabNavigator";
import { MyDrawers } from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

const AppStack = (): JSX.Element => {
    return (
        <NavigationContainer> 
            <Stack.Navigator screenOptions={{headerBackTitleVisible: false, statusBarColor: '#DAE0E2'}}>
                <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
                <Stack.Screen name="EventList" component={MyDrawers} options={{headerShown: false}}/>
                <Stack.Screen name="EventDetails" component={EventDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack;