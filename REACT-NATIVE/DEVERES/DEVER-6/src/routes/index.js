import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../pages/home";
import UserProfileScreen from "../pages/userProfile";

const Stack = createNativeStackNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="User Profile"
                    component={UserProfileScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}