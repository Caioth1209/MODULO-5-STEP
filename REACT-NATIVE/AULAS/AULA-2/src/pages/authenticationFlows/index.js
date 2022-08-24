import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../signIn';
import Recovery from '../recoveryPassword';

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () =>{
    <AuthStack.Navigator>
        <AuthStack.Screen
        name="SignIn"
        component={SignIn}/>
        <AuthStack.Screen
        name="Recover Password"
        component={Recovery}/>
    </AuthStack.Navigator>
}

const Tab = createBottomTabNavigator();

export default function App(){
    // bottom
    // stack
    return (
        <NavigationContainer>

        </NavigationContainer>
    )
};